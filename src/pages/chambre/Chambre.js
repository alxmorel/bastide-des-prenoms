import { useParams } from 'react-router';
import './Chambre.scss'

import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function Chambre() {
  const { id } = useParams();

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
      <div className='chambre_content'>
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
                src={'/bastide-des-prenoms/image/chambre/modern-bedroom-design.jpg'}
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
        <div className='images_horizontal_list'>
          <img
            src={'/bastide-des-prenoms/image/chambre/sdb_2.jpg'}
            alt="salle de bains design"
          />
          <img
            src={'/bastide-des-prenoms/image/chambre/sdb_toilettes_vasque.jpg'}
            alt="Une bastide tout en pierre typique de la région"
          />
          <img
            src={'/bastide-des-prenoms/image/volets.jpg'}
            alt="Une bastide tout en pierre typique de la région"
          />
        </div>

        <div className='chambre_presentation'>
          <p>
          Plongez dans un monde de confort et d'intimité dans notre chambre d'hôte. Avec une ambiance chaleureuse et des détails raffinés, chaque instant promet une expérience inoubliable. Réservez dès maintenant pour une escapade parfaite, où le charme rencontre le bien-être.          </p>
        </div>
      </div>
    </div>
  )
}

export default Chambre
