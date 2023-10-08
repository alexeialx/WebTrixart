import Carousel from 'react-bootstrap/Carousel';
import styles from './Slider.module.css';

const Slider = ({ images }) => {
  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={2000}>
            <div className={`${styles.imgContainer}`}>
              <img className={`${styles.img}`} src={image.src} alt="" />
              <div className={`${styles.overlay}`}></div>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;