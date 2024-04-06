import { useParams } from 'react-router'
import './Chambre.scss'
import React, { useRef, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Chambre() {
  const { id } = useParams()
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(0)
  const imagesHorizontalListRef = useRef(null)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - imagesHorizontalListRef.current.offsetLeft)
    setScrollLeft(imagesHorizontalListRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - imagesHorizontalListRef.current.offsetLeft
    const walk = (x - startX) * 1 // Multipliez par un facteur pour ajuster la vitesse de défilement
    imagesHorizontalListRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const onChange = (index, item) => {
    console.log(`Slide changed to index ${index}`)
  }

  const onClickItem = (index, item) => {
    console.log(`Clicked item: ${item}`)
  }

  const onClickThumb = (index, item) => {
    console.log(`Clicked thumb: ${item}`)
  }

  return (
    <div className="chambre_container">
      <div className="chambre_content">
        <div className="carousel_container">
          <Carousel
            className="custom_carousel"
            showArrows={false}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            autoPlay={false}
            swipeable={true}
            infiniteLoop={true}
            emulateTouch={true}
            stopOnHover={true}
            interval={4000}
            swipeScrollTolerance={5}
          >
            <div>
              <img
                src={
                  '/bastide-des-prenoms/image/chambre/modern-bedroom-design.jpg'
                }
                alt="Une bastide et son jardin fleuri"
              />
            </div>
            <div>
              <img
                src={'/bastide-des-prenoms/image/champ_lavande.jpg'}
                alt="Un vue dégagée donnant sur un magnifique champ de lavande"
              />
            </div>
            <div>
              <img
                src={'/bastide-des-prenoms/image/ciel_bleu.jpg'}
                alt="Des pins et un ciel bleu, la campagne du Vaucluse"
              />
            </div>
            <div>
              <img
                src={'/bastide-des-prenoms/image/volets.jpg'}
                alt="Une bastide tout en pierre typique de la région"
              />
            </div>
            <div>
              <img
                src={'/bastide-des-prenoms/image/convivialite.jpg'}
                alt="Des moments de partage conviviaux"
              />
            </div>
          </Carousel>
        </div>
        <div
          className="images_horizontal_list"
          ref={imagesHorizontalListRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="horizontal_image">
            <img
              src={'/bastide-des-prenoms/image/chambre/sdb_2.jpg'}
              alt="salle de bains design"
            />
          </div>
          <div className="horizontal_image">
            <img
              src={
                '/bastide-des-prenoms/image/chambre/sdb_toilettes_vasque.jpg'
              }
              alt="Une bastide tout en pierre typique de la région"
            />
          </div>
          <div className="horizontal_image">
            <img
              src={'/bastide-des-prenoms/image/volets.jpg'}
              alt="Une bastide tout en pierre typique de la région"
            />
          </div>
        </div>
        <div className="chambre_description">
          <div className="chambre_presentation">
            <p>
              Plongez dans un monde de confort et d'intimité dans notre chambre
              d'hôte. Avec une ambiance chaleureuse et des détails raffinés,
              chaque instant promet une expérience inoubliable.
            </p>
            <p>
              Réservez dès maintenant pour une escapade parfaite, où le charme
              rencontre le bien-être.
            </p>
          </div>
          <div className="book_this_bedroom">
            <h4>Book this suite</h4>
            <div className="links">
              <div>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+33614511027">(+33) 6 14 51 10 27</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                  className="underline"
                  href="mailto:bastidedesprenoms.info@gmail.com"
                >
                  bastidedesprenoms.info@gmail.com
                </a>
              </div>
            </div>
            <p>Suivez nous & partagez votre expérience</p>
            <div className="share_icons">
              <img
                src="/bastide-des-prenoms/image/icon/instagram.svg"
                alt="instagram icon"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chambre
