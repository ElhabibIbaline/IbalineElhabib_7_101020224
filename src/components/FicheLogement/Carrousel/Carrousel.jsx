
import styles from './Carrousel.module.scss'
import { useState } from 'react';


function Carrousel(props) {

  const pictures = props.pictures;

  const [showImage, setShowimage] = useState(0);

  const nextImage = () => {
    setShowimage(showImage === pictures.length - 1 ? 0 : showImage + 1)
  }

  const prevImage = () => {
    setShowimage(showImage === 0 ? pictures.length - 1 : showImage - 1);
  };


  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (

    <div className={styles.slide}>

      {pictures.length > 1 && (
        <p className={styles.left} onClick={prevImage}>
          <i className="fas fa-chevron-left"></i>
        </p>
      )}
      {pictures.length > 1 && (
        <p className={styles.right} onClick={nextImage}>
          <i className="fas fa-chevron-right"></i>
        </p>
      )}

      {pictures.map((image, index) => {
        return (
          <div key={index} className={`${styles.slider} ${index === showImage ? styles.active : ''}`}>
            {index === showImage && 
            (<img 
              src={image} 
              alt="logementImage" 
              className={styles.slider_image} 
              // className={`${styles.slider_image} ${index === showImage ? 'slide-in' : ''}`} 
              />

             

            )}
            {index === showImage && pictures.length > 1 && (
              <p className={styles.counter}>
                {showImage + 1}/{pictures.length}
              </p>
            )}
          </div>
        );
      })}
    </div>

  )
}

export default Carrousel
