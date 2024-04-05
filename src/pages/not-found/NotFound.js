import React from 'react'
import './NotFound.scss'

function NotFound() {
  return (
    <div className="notFound-container">
      <svg
        className="error-svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Insérez le contenu de votre SVG ici */}
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-2v-2h2v2zm0-4h-2V7h2v4z" />
      </svg>
      <h1>Oops! Page not found</h1>
      <p>
        The page you are looking for might have been removed or temporarily
        unavailable.
      </p>
      <a href="/">Go to Home Page</a>
    </div>
  )
}

export default NotFound
