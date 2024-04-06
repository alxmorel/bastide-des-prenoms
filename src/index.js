import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { ThemeProvider, createTheme } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#816040',
    },
    secondary: {
      main: '#F5F1E1',
    },
  },
})

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/bastide-des-prenoms/locales/{{lng}}.json',
    },
    detection: {
      order: [
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['fr', 'en', 'it', 'ge'],
    ns: ['translations'],
    defaultNS: 'translations',
  })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
