import './Header.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value
    console.log('change langue : ', newLanguage)
    i18n.changeLanguage(newLanguage)
  }

  return (
    <header className="header_container">
      <nav>
        <img
          className="bastide_logo"
          src={'/image/bastideDesPrenoms_logo_1.svg'}
          alt="Logo Bastide Des Prenoms"
          height={80}
          onClick={() => navigate('/')}
        />
        <div className="links_container">
          <Link to="/">{t('home')}</Link>
          <Link to="/a-propos">{t('about')}</Link>
          <Link to="/contact">{t('contact')}</Link>
          <a className="underline" href="https://www.booking.com/index.fr.html">
            {t('reservation')}
          </a>
        </div>
        <img
          className="menu-hamburger"
          src={'/image/burger-menu.svg'}
          alt="burger menu icon"
          height={35}
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
