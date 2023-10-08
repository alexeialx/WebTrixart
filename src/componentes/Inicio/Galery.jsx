import { useState } from "react";
import styles from "../../pages/Inicio.module.css";
import Img1 from "../../assets/images/gallery/1.jpg";
import Img2 from "../../assets/images/gallery/2.jpg";
import Img3 from "../../assets/images/gallery/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTimes } from "@fortawesome/fontawesome-free-solid";

const imagesWithInfo = [
  {
    src: Img1,
    name: "Imagen 1",
    description: "Descripción de la imagen 1",
  },
  {
    src: Img2,
    name: "Imagen 2",
    description: "Descripción de la imagen 2",
  },
  {
    src: Img3,
    name: "SATORU GOJO",
    description: "Descripción de la imagen 3",
  },
  {
    src: Img1,
    name: "Imagen 1",
    description: "Descripción de la imagen 1",
  },
  {
    src: Img2,
    name: "Imagen 2",
    description: "Descripción de la imagen 2",
  },
  {
    src: Img3,
    name: "SATORU GOJO",
    description: "Descripción de la imagen 3",
  },
  {
    src: Img1,
    name: "Imagen 1",
    description: "Descripción de la imagen 1",
  },
  {
    src: Img2,
    name: "Imagen 2",
    description: "Descripción de la imagen 2",
  },
  {
    src: Img3,
    name: "SATORU GOJO",
    description: "Descripción de la imagen 3",
  },
  {
    src: Img1,
    name: "Imagen 1",
    description: "Descripción de la imagen 1",
  },
  {
    src: Img2,
    name: "Imagen 2",
    description: "Descripción de la imagen 2",
  },
  {
    src: Img3,
    name: "SATORU GOJO",
    description: "Descripción de la imagen 3",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.galleryTittle}>
        <h2>LO ÚLTIMO DE NUESTRO TRABAJO|</h2>
      </div>
      <div className={styles.galeryContainer}>
        {imagesWithInfo.map((image, index) => (
          <div
            className={styles.galleryItem}
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <div className={styles.imageContainer}>
              <img src={image.src} alt={image.name} />
              <div className={styles.overlay}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faCamera} />
                </span>
                <div className={styles.overlayContent}>
                  <h4>{image.name}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.btnInfo}`}>
        <button className={`${styles.btn}`}>
          <a href="">VER MÁS TRABAJOS</a>
        </button>
      </div>
      {selectedImage && (
        <div className={styles.imageViewer}>
          <div className={styles.imageViewerContent}>
            <div className={styles.closeIcon} onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              onClick={handleClose}
            />
            <div className={styles.imageInfo}>
              <h4>{selectedImage.name}</h4>
              <p>{selectedImage.description}</p>
              <button className={styles.btn}>
                <a href="">Ver mas</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
