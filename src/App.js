import React, { useState } from 'react'
import './index.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/modal/Modal'
import Home from './pages/home/Home'
import Chambre from './pages/chambre/Chambre'
import Contact from './pages/contact/Contact'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const cookieEnabled = localStorage.getItem('cookieEnabled')

  const [cookieModalShow, setcookieModalShow] = useState(!cookieEnabled)

  const handleCookieAccept = () => {
    if (navigator.cookieEnabled) {
      document.cookie =
        'cookieEnabled=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'
    }
    localStorage.setItem('cookieEnabled', 'true')
    setcookieModalShow(false)
  }

  const handleCookieRefuse = () => {
    localStorage.setItem('cookieEnabled', 'false')
    setcookieModalShow(false)
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chambre" element={<Chambre />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      {cookieModalShow && (
        <Modal
          show={cookieModalShow}
          setModalShow={setcookieModalShow}
          confirmAction={handleCookieAccept}
          leaveAction={handleCookieRefuse}
          description={
            'Alexandre Morel cv uses cookies to deliver and enhance the quality of its services and to analyze traffic. If you agree, cookies are also used to serve advertising and to personalize the content and advertisements that you see. Learn more.'
          }
          accept={'AGREE'}
          refused={'NO THANKS'}
          cookieModal={true}
        />
      )}
    </div>
  )
}

export default App
