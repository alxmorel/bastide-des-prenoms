import './BookingForm.scss'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import NumberInput from './QuantityInput'
import dayjs from 'dayjs'
import CustomAlert from '../alert/CustomAlert'

function BookingForm() {
  const { t } = useTranslation()
  dayjs.locale(t.language)

  const [bookingStatus, setBookingStatus] = useState(null)
  const [dateRange, setDateRange] = useState([null, null])
  const [nbGuests, setNbGuest] = useState(null)
  const [openAlert, setOpenAlert] = useState(false)

  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange)
    console.log('dateRange[0] : ', dateRange[0])
    console.log('dateRange[1] : ', dateRange[1])
  }

  const handleGuestChange = (guests) => {
    setNbGuest(guests)
  }

  const book = () => {
    console.log('Date range is : ', dateRange[0].$d, ' : ', dateRange[1].$d)
    console.log('nb guest : ', nbGuests)
    if (!dateRange[0] || !dateRange[1] || !nbGuests) {
      setBookingStatus('incomplete')
      setOpenAlert(true)
      return
    }
    fetch('URL_DE_L_API_DE_BOOKING', {
      method: 'POST',
      body: JSON.stringify({
        startDate: dateRange[0].toISOString(),
        endDate: dateRange[1].toISOString(),
        guests: nbGuests,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) setBookingStatus('success')
        else setBookingStatus('error')
        setOpenAlert(true)
      })
      .catch((error) => {
        console.error('Error booking:', error)
        setBookingStatus('error')
        setOpenAlert(true)
      })
  }

  const getDatePickerOptions = () => {
    const options = {}
    if (t.language === 'fr') {
      options.format = 'DD/MM/YYYY'
      options.dayFormat = (day, locale) => locale.localize.day(day)
    }
    options.monthsLocale = t.language

    return options
  }

  return (
    <>
      <CustomAlert
        openAlert={openAlert}
        onClose={() => setOpenAlert(false)}
        icon={bookingStatus === 'error' ? 'error' : 'warning'}
        severity={bookingStatus === 'error' ? 'error' : 'warning'}
      >
        {bookingStatus === 'incomplete' && t('incomplete_booking_info')}
        {bookingStatus === 'success' && t('booking_success')}
        {bookingStatus === 'error' && t('booking_error')}
      </CustomAlert>
      <div className="bookingForm_container">
        <div className="bookingForm_content">
          <LocalizationProvider dateAdapter={AdapterDayjs} locale={t.language}>
            <div className="datePicker_container">
              <DateRangePicker
                className="datePicker"
                value={dateRange}
                localeText={{ start: t('check_in'), end: t('check_out') }}
                minDate={dayjs()}
                onChange={handleDateChange}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <input {...startProps} />
                    <input {...endProps} />
                  </React.Fragment>
                )}
                {...getDatePickerOptions()}
              />
            </div>
            <NumberInput
              className="btn_number"
              aria-label="Nb guests"
              placeholder={t('guests')}
              min={1}
              max={8}
              value={nbGuests}
              onChange={(event, val) => handleGuestChange(val)}
            />
            <Button
              className="btn_book"
              disabled={
                dateRange[0] === null ||
                dateRange[1] === null ||
                nbGuests === null
              }
              variant="contained"
              color="primary"
              onClick={() => book()}
            >
              {t('book')}
            </Button>
          </LocalizationProvider>
        </div>
      </div>
    </>
  )
}

export default BookingForm
