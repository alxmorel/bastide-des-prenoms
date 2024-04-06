import './Header.scss'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value
    console.log('change langue : ', newLanguage)
    i18n.changeLanguage(newLanguage)
  }

  const toggleDisplayMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header_container">
      <nav>
        <img
          className="bastide_logo"
          src={'/bastide-des-prenoms/image/bastideDesPrenoms_logo_1.svg'}
          alt="Logo Bastide Des Prenoms"
          height={80}
          onClick={() => navigate('/')}
        />
        <div className={`links_container ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            {t('home')}
          </Link>
          <Link to="/a-propos" onClick={() => setIsMenuOpen(false)}>
            {t('about')}
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            {t('contact')}
          </Link>
          <a className="underline" href="https://www.booking.com/index.fr.html">
            {t('reservation')}
          </a>
        </div>
        <img
          className="menu-hamburger"
          src={'/bastide-des-prenoms/image/burger-menu.svg'}
          alt="burger menu icon"
          height={35}
          onClick={toggleDisplayMenu}
          style={{ filter: isMenuOpen ? 'invert(100%)' : 'none' }}
        />
        <div className="language_selector">
          <FontAwesomeIcon icon={faGlobe} />
          <select value={i18n.language} onChange={handleLanguageChange}>
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="ge">German</option>
          </select>
        </div>
      </nav>
    </header>
  )
}

export default Header
