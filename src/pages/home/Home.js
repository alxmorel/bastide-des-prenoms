import './Home.scss'

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  const onChange = (index, item) => {
    console.log(`Slide changed to index ${index}`)
  }

  const onClickItem = (index, item) => {
    console.log(`Clicked item: ${item}`)
  }

  const onClickThumb = (index, item) => {
    console.log(`Clicked thumb: ${item}`)
  }

  const itemData = [
    {
      img: 'image/bastide.jpg',
      title: 'Bed',
    },
    {
      img: 'image/champ_lavande.jpg',
      title: 'Books',
    },
    {
      img: 'image/ciel_bleu.jpg',
      title: 'Sink',
    },
    {
      img: 'image/volets.jpg',
      title: 'Kitchen',
    },
    {
      img: 'image/convivialite.jpg',
      title: 'Blinds',
    },
  ]

  return (
    <div className="home_container">
      <div className="home_content">
        <div className="carousel_container">
          <Carousel
            className="custom_carousel"
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            autoPlay={true}
            swipeable={true}
            infiniteLoop={true}
            emulateTouch={true}
            stopOnHover={true}
            interval={4000}
            swipeScrollTolerance={5}
          >
            <div>
              <img
                src={'image/bastide.jpg'}
                alt="Une bastide et son jardin fleuri"
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img
                src={'image/champ_lavande.jpg'}
                alt="Un vue dégagée donnant sur un magnifique champ de lavande"
              />
            </div>
            <div>
              <img
                src={'image/ciel_bleu.jpg'}
                alt="Des pins et un ciel bleu, la campagne du Vaucluse"
              />
            </div>
            <div>
              <img
                src={'image/volets.jpg'}
                alt="Une bastide tout en pierre typique de la région"
              />
            </div>
            <div>
              <img
                src={'image/convivialite.jpg'}
                alt="Des moments de partage conviviaux"
              />
            </div>
          </Carousel>
        </div>

        <div className='welcome_title'>
          <p>Hello and welcome guest &#9996;&#127995;</p>
          <p>we're 100% dedicated to Bollène !</p>
        </div>

        <div className='container_global_infos'>
          <div className='global_info'>
            <div className='icon'>
              <img src='/image/icon/bed.svg' alt='fenetres ouvertes représentant un grand espace dans nos chambres' width={80} />
            </div>
            <p><b>A lot of space</b> in our room</p>
          </div>
          <div className='global_info'>
            <div className='icon'>
              <img src='/image/icon/olive-tree-bg_green.svg' alt='Relaxation, divertissement et détente assurés' width={80} />
            </div>
            <p><b>Relaxation</b> assurée</p>
          </div>
          <div className='global_info'>
            <div className='icon'>
              <img src='/image/icon/fireplace.svg' alt='Espaces conviviaux de détente seul comme à plusieurs' width={80} />
            </div>
            <p><b>Ambiance</b> chaleureuse et accueillante </p>
          </div>
          <div className='global_info'>
            <div className='icon'>
              <img src='/image/icon/window.svg' alt='Chambre avec vue dégagée' width={80} />
            </div>
            <p><b>Vue dégagée</b> le charme provençal</p>
          </div>
          {/* <div className='global_info'>
            <div className='icon'>
              <img src='/image/icon/shower_1.svg' alt='Chaque chambre contient une salle de bain privative' width={80} />
            </div>
            <p><b>Private bathroom</b> in our room</p>
          </div> */}
          <div className='global_info'>
            <div className='icon'>
              <img src='/image/icon/sink.svg' alt='Chaque chambre contient une salle de bain privative' width={80} />
            </div>
            <p><b>{t('private_bathroom')}</b> {t('your_private_one')}</p>
          </div>
          <div className='global_info'>
            <div className='icon'>
              <img src='/image/icon/doorknob.svg' alt='Chaque chambre contient une salle de bain privative' width={80} />
            </div>
            <p><b>{t('private_intimity')}</b> {t('private_intimity_1')}</p>
          </div>
        </div>

        <div className="bedrooms">
          <h2>Nos chambres</h2>
          <div className="bedroom">
            <div className="bed_card">
              <img
                src="data:image/jpeg;base64,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"
                alt="chambre number 1"
              />
              <p>Nom chambre</p>
            </div>
            <div className="bed_card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTp0jDX8jEJEwj6GlXVfW-Eur5_NIRP8yfDN2XLkA_VSFpABQiL_vOFem6z9pMYK-II5o&usqp=CAU"
                alt="chambre number 2"
              />
              <p>Nom chambre</p>
            </div>
            <div className="bed_card">
              <img
                src="data:image/jpeg;base64,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"
                alt="chambre number 3"
              />
              <p>Nom chambre</p>
            </div>
          </div>
        </div>

        <div className="container_activities">
          <h2>Nos activités et espaces naturels</h2>
          <div className="activities">
            <div className="activity">
              <div className="activity_content">
                <h3>Miellerie</h3>
                <p>Cultivez votre propre miel</p>
              </div>
              <img src="image/miellerie.jpg" alt="Cultivez votre propre miel" />
            </div>
            <div className="activity">
              <div className="activity_content">
                <h3>Lavanderaie</h3>
                <p>Promenez-vous dans les champs de lavande</p>
              </div>
              <img
                src="image/catalogue-Lavandes-champs-30.jpg"
                alt="Promenez-vous dans les champs de lavande"
              />
            </div>
            <div className="activity">
              <div className="activity_content">
                <h3>Oliveraie</h3>
                <p>Admirez de somptueux oliviers de provence</p>
              </div>
              <img
                src="image/olivier.jpg"
                alt="Admirez de somptueux oliviers de provence"
              />
            </div>
            <div className="activity">
              <div className="activity_content">
                <h3>Baignade</h3>
                <p>Profitez d'un moment de détente dans notre espace dédié</p>
              </div>
              <img
                src="image/piscine_provence.png"
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
