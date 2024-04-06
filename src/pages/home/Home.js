import './Home.scss'

import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import BookingForm from '../../components/booking-form/BookingForm'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [isOurGuestHouseVisible, setIsOurGuestHouseVisible] = useState(false)
  const [isBedroomVisible, setIsBedroomVisible] = useState(false)
  const ourGuestHouseRef = useRef(null)
  const bedroomRef = useRef(null)

  const handleNavigateBedroom = (bedRoomId) => {
    navigate(`/chambre/${bedRoomId}`)
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const handleScroll = () => {
      const ourGuestHouse = ourGuestHouseRef.current
      const bedroom = bedroomRef.current
      if (!ourGuestHouse || !bedroom) return

      const rect1 = ourGuestHouse.getBoundingClientRect()
      const rect2 = bedroom.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      const middleOfWindow = windowHeight / 2
      const containerMiddle1 = rect1.top + rect1.height / 2
      const containerMiddle2 = rect2.top + rect2.height / 2

      if (!isOurGuestHouseVisible && containerMiddle1 < middleOfWindow) {
        setIsOurGuestHouseVisible(true)
      }
      if (!isBedroomVisible && containerMiddle2 < middleOfWindow) {
        setIsBedroomVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOurGuestHouseVisible, isBedroomVisible]) // Assurez-vous d'ajouter ces états dans le tableau de dépendances

  return (
    <div className="home_container">
      <div className="home_content">
        <div className="image_container">
          <h2 className="gimic">
            Culture <br />
            par Nature
          </h2>
          <div className="image-wrapper">
            <img src="/bastide-des-prenoms/image/volets.jpg" alt="" />
          </div>
          <BookingForm />
        </div>

        <div className="welcome_title">
          <p className="text_bold">Hello and welcome guest &#9996;&#127995;</p>
          <p className="text_bold">we're 100% dedicated to Bollène !</p>
        </div>
        {/* 
        <div className="container_global_infos">
          <div className="global_info">
            <div className="icon">
              <img
                src="/bastide-des-prenoms/image/icon/bed.svg"
                alt="fenetres ouvertes représentant un grand espace dans nos chambres"
                width={80}
              />
            </div>
            <p>
              <b>A lot of space</b> in our room
            </p>
          </div>
          <div className="global_info">
            <div className="icon">
              <img
                src="/bastide-des-prenoms/image/icon/olive-tree-bg_green.svg"
                alt="Relaxation, divertissement et détente assurés"
                width={80}
              />
            </div>
            <p>
              <b>Relaxation</b> assurée
            </p>
          </div>
          <div className="global_info">
            <div className="icon">
              <img
                src="/bastide-des-prenoms/image/icon/fireplace.svg"
                alt="Espaces conviviaux de détente seul comme à plusieurs"
                width={80}
              />
            </div>
            <p>
              <b>Ambiance</b> chaleureuse et accueillante{' '}
            </p>
          </div>
          <div className="global_info">
            <div className="icon">
              <img
                src="/bastide-des-prenoms/image/icon/window.svg"
                alt="Chambre avec vue dégagée"
                width={80}
              />
            </div>
            <p>
              <b>Vue dégagée</b> le charme provençal
            </p>
          </div>
          <div className="global_info">
            <div className="icon">
              <img
                src="/bastide-des-prenoms/image/icon/sink.svg"
                alt="Chaque chambre contient une salle de bain privative"
                width={80}
              />
            </div>
            <p>
              <b>{t('private_bathroom')}</b> {t('your_private_one')}
            </p>
          </div>
          <div className="global_info">
            <div className="icon">
              <img
                src="/bastide-des-prenoms/image/icon/doorknob.svg"
                alt="Chaque chambre contient une salle de bain privative"
                width={80}
              />
            </div>
            <p>
              <b>{t('private_intimity')}</b> {t('private_intimity_1')}
            </p>
          </div>
        </div> 
        */}
        <div
          ref={ourGuestHouseRef}
          className={`who_are_we_container ${
            isOurGuestHouseVisible ? 'fade-in' : ''
          }`}
        >
          <div>
            <figure>
              <img
                className="decorative_svg"
                src="/bastide-des-prenoms/image/icon/design_line.svg"
                alt="espace de convivialité"
              />
              <img
                className="zoom_in_img"
                src="/bastide-des-prenoms/image/salon2.jpg"
                alt="espace de convivialité"
              />
            </figure>
          </div>
          <div className="who_are_we_desc">
            <h3>{t('our_guest_house_title')}</h3>
            <p>{t('our_guest_house_text')}</p>
          </div>
        </div>

        <div
          ref={bedroomRef}
          className={`bedrooms ${isBedroomVisible ? 'fade-in-from-left' : ''}`}
        >
          <h2>Nos chambres</h2>
          <div className="bedroom">
            <div className="bed_card" onClick={() => handleNavigateBedroom(0)}>
              <img
                className="zoom_in_img"
                src="/bastide-des-prenoms/image/chambre/modern-table-lamps-for-bedroom.jpg"
                alt="chambre number 1"
              />
              <div className="room_desc">
                <h4>Chambre Lavande</h4>
                <p>
                  Plongez dans un océan de calme et de sérénité au cœur des
                  champs de lavande.
                </p>
                <Link to="/chambre/O">
                  Voir la chambre <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div className="bed_card" onClick={() => handleNavigateBedroom(1)}>
              <img
                className="zoom_in_img"
                src="/bastide-des-prenoms/image/chambre/modern-bedroom-design.jpg"
                alt="chambre number 2"
              />
              <div className="room_desc">
                <h4>Suite des Oliviers</h4>
                <p>
                  Découvrez le charme authentique de la Provence parmi les
                  oliviers centenaires.
                </p>
                <Link to="/chambre/1">
                  Voir la chambre <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div className="bed_card" onClick={() => handleNavigateBedroom(2)}>
              <img
                className="zoom_in_img"
                src="/bastide-des-prenoms/image/chambre/modern-bedroom-chairs.jpg"
                alt="chambre number 3"
              />
              <div className="room_desc">
                <h4>Suite des Vignobles</h4>
                <p>
                  Immergez-vous dans l'univers viticole de la région depuis
                  cette chambre élégante et confortable.
                </p>
                <Link to="/chambre/2">
                  Voir la chambre <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>

        <div className="container_activities">
          <h2>Nos activités et espaces naturels</h2>
          <div className="activities">
            <div className="activity">
              <div className="activity_content">
                <h3>Miellerie</h3>
                <p>Cultivez votre propre miel</p>
              </div>
              <img
                src="/bastide-des-prenoms/image/miellerie.jpg"
                alt="Cultivez votre propre miel"
              />
            </div>
            <div className="activity">
              <div className="activity_content">
                <h3>Lavanderaie</h3>
                <p>Promenez-vous dans les champs de lavande</p>
              </div>
              <img
                src="/bastide-des-prenoms/image/catalogue-Lavandes-champs-30.jpg"
                alt="Promenez-vous dans les champs de lavande"
              />
            </div>
            <div className="activity">
              <div className="activity_content">
                <h3>Oliveraie</h3>
                <p>Admirez de somptueux oliviers de provence</p>
              </div>
              <img
                src="/bastide-des-prenoms/image/olivier.jpg"
                alt="Admirez de somptueux oliviers de provence"
              />
            </div>
            <div className="activity">
              <div className="activity_content">
                <h3>Baignade</h3>
                <p>Profitez d'un moment de détente dans notre espace dédié</p>
              </div>
              <img
                src="/bastide-des-prenoms/image/piscine_provence.png"
                alt="Profitez d'un moment de détente dans notre espace de baignade dédié"
              />
            </div>
          </div>
        </div>

        <div className="questions">
          <h2>Questions fréquentes</h2>
          <p>Toutes les réponses à vos questions</p>

          <div>
            <FontAwesomeIcon icon={faHouse} />
          </div>
        </div>

        {/* <Box sx={{ overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box> */}
      </div>
    </div>
  )
}

export default Home
