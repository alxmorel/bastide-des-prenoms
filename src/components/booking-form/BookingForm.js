import './BookingForm.scss'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid, Typography } from '@mui/material'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import QuantityInput from './QuantityInput'
import NumberInput from './QuantityInput'

function BookingForm() {
  const [dateRange, setDateRange] = useState([null, null])
  const [nbGuests, setNbGuest] = useState(null)

  const date = new Date();
  date.setDate(date.getDate() - 1);

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
  }

  return (
    <div className="bookingForm_container">
      <div className="bookingForm_content">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <div className="datePicker_container">
            <DateRangePicker
              className="datePicker"
              value={dateRange}
              // minDate={date}
              onChange={handleDateChange}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <input {...startProps} />
                  <input {...endProps} />
                </React.Fragment>
              )}
            />
          </div>
          <NumberInput
            className="btn_number"
            aria-label="Nb guests"
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
            Réserver
          </Button>
        </LocalizationProvider>
      </div>
    </div>
  )
}

export default BookingForm
