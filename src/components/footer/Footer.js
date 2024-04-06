import { Link } from 'react-router-dom'
import './Footer.scss'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const { t } = useTranslation()

  const buildGoogleMapsUrl = () => {
    const address = '326 Route Fontaine Davin, 84500 Bollène' // Adresse de votre maison d'hôte
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`
  }
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer_container">
      <div className="container_adresse">
        <h2>{t('contact_us')}</h2>
        <div className="adresse">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div>
            <p>La Bastide des Prénoms</p>
            <p>326 Route Fontaine Davin</p>
            <p>84500 Bollène</p>
          </div>
          <a href="tel:0615511027">06 14 51 10 27</a>
        </div>
        <div className="container_gmaps">
          <a
            href={buildGoogleMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('view_on_google_maps')}
          </a>
          <iframe
            title="gmap"
            className="iframe_map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2857.525861203985!2d4.767073!3d44.258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b59f01851cae2d%3A0x8a62c31383ae005f!2s326%20Rte%20Font%20Davin%2C%2084500%20Boll%C3%A8ne!5e0!3m2!1sfr!2sfr!4v1712421035724!5m2!1sfr!2sfr"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <a onClick={() => backToTop()}>HAUT DE PAGE ^</a>

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
