import React, { useEffect, useState } from 'react'
import './index.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/modal/Modal'
import Home from './pages/home/Home'
import Chambre from './pages/chambre/Chambre'
import Contact from './pages/contact/Contact'
import APropos from './pages/a-propos/APropos'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' //react router pour l'utilisation classique
import { HashRouter as Router, Route, Routes } from 'react-router-dom' //Hashrouter pour le github pages
import { useTranslation } from 'react-i18next'

function App() {
  const cookieEnabled = localStorage.getItem('cookieEnabled')

  const [cookieModalShow, setcookieModalShow] = useState(!cookieEnabled)
  const { t } = useTranslation()
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

  useEffect(() => {
    //console.clear() //Pour effacer le contenu de la console (licence error mui)
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chambre/:id" element={<Chambre />} />
          <Route path="a-propos" element={<APropos />} />
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
          description={t('cookies_legacy')}
          accept={'AGREE'}
          refused={'NO THANKS'}
          cookieModal={true}
        />
      )}
    </div>
  )
}

export default App
