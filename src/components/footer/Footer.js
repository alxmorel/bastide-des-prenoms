import { Link } from 'react-router-dom'
import './Footer.scss'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer_container">
      <div className="container_adresse">
        <h2>{t('contact_us')}</h2>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <p>La Bastide des Prénoms</p>
        <p>326 Route Fontaine Davin</p>
        <p>84500 Bollène</p>
        <a href="tel:0615511027">06 14 51 10 27</a>
      </div>
      <div className="container_links">
        <Link to="/">{t('home')}</Link>
        <Link to="/a-propos">{t('about')}</Link>
        <Link to="/contact">{t('contact')}</Link>
      </div>
      <div className="container_legals">
        <Link to="/site-plan">{t('site_plan')}</Link>
        <Link to="/legal-notice">{t('legal_mentions')}</Link>
        <Link to="/cookie-policy">{t('cookie_policy')}</Link>
      </div>
      <div className="copyright">© 2024 La Bastide des Prénoms</div>
    </footer>
  )
}

export default Footer
