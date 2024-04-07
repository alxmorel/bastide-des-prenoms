import { useParams } from 'react-router'
import './Chambre.scss'
import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

function Chambre() {
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null);
  const [chambreData, setChambreData] = useState(null);

  const imagesHorizontalListRef = useRef(null)

  const PUBLIC_IMG_URI = "/bastide-des-prenoms/image/chambre"
  const PUBLIC_ICON_URI = "/bastide-des-prenoms/image/icon"

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!i18n.language) return
        const response = await fetch(`/bastide-des-prenoms/data/chambres_${i18n.language}.json`);
        //  const response = await fetch("/bastide-des-prenoms/data/chambres_fr.json");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("data : ", data)
        setChambreData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id, i18n.language]);

  const handleImageClick = (imageUrl) => {
    console.log("affichage image url : ", imageUrl)
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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

  // Render loading state if data is not yet fetched
  if (!chambreData) {
    return <div>Loading...</div>;
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
            {chambreData.chambre[id].carouselImages.map((image, index) => (
              <div key={index}>
                <img src={`${PUBLIC_IMG_URI}/${image.img}`} alt={image.alt} />
              </div>
            ))}
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
          {chambreData.chambre[id].horizontalListImages.map((image, index) => (
            <div key={index} className="horizontal_image">
              <img onClick={() => handleImageClick(`${PUBLIC_IMG_URI}/${image.img}`)} src={`${PUBLIC_IMG_URI}/${image.img}`} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="chambre_description">
          <div className="container_chambre_book">
            <div className="chambre_presentation">
              {chambreData.chambre[id].description
                .map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
            </div>
            <div className="book_this_bedroom">
              <h4>{chambreData.general.book_this_room}</h4>
              <div className="container_book_now_infos">
                <div className="links">
                  <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <a href={`tel:${chambreData.general.phoneLink}`}>{chambreData.general.phoneNumber}</a>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a
                      className="underline"
                      href={`mailto:${chambreData.general.emailAddress}`}
                    >
                      {chambreData.general.emailAddress}
                    </a>
                  </div>
                </div>
                <div className="follow_us">
                  <p> {chambreData.general.follow_us}</p>
                  <div className="share_icons">
                    {
                      chambreData.general.networks.map((network, index) => (
                        <a
                          key={index}
                          href={network.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={`${PUBLIC_ICON_URI}/${network.logo}`}
                            alt={network.alt}
                            width={36}
                            height={36}
                          />
                        </a>
                      ))
                    }

                  </div>
                </div>
              </div>
              <Button
                className="btn_book_now"
                variant="contained"
                color="primary"
                href={chambreData.chambre[id].bookingLink}>
                {t('book')}
              </Button>
            </div>
          </div>
        </div>
        <div className="additional_info">
          {chambreData.chambre[id].facilities.map((facility, index) => (
            <div key={index} className="additional_info_card">
              <img
                src={`${PUBLIC_ICON_URI}/${facility.icon}`}
                alt={facility.icon}
                width={40}
                height={40}
              ></img>
              <div className="desc">
                <p className="bold-text">{facility.title}</p>
                <p>
                  {facility.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={handleCloseModal}>
          <div className="fullscreen-image-container">
            <img src={selectedImage} alt="Fullscreen" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Chambre
