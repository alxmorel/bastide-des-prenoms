import './CustomAlert.scss'
import React, { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

function CustomAlert({ openAlert, onClose, icon = '', severity, children }) {
  return (
    <>
      <div className={`alert ${openAlert ? ' open' : ''}`}>
        <Alert
          icon={
            icon === 'success' ? (
              <CheckIcon fontSize="inherit" />
            ) : icon === 'error' ? (
              <ErrorIcon fontSize="inherit" />
            ) : icon === 'warning' ? (
              <WarningIcon fontSize="inherit" />
            ) : (
              false
            )
          }
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => onClose()}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          onClose={() => onClose()}
        >
          {children}
        </Alert>
      </div>
    </>
  )
}

export default CustomAlert
