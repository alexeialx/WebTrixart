import { useState, useEffect } from "react";
import styles from "./Testimonio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/fontawesome-free-solid";

const opiniones = [
  {
    text: "En nuestra reciente experiencia con David F. Barruz y su equipo nos han demostrado algo que a veces no es tan común en este sector como podría parecer: su alta profesionalidad. Tanto en plazos, como en calidad, facilidad de trato y atención a nuestras necesidades hemos quedado gratamente satisfechos. Gracias a profesionales así se pueden llevar a término los grandes trabajos.",
    name: "Wolffdesigna",
  },
  {
    text: "En nuestra reciente experiencia con David F. Barruz y su equipo nos han demostrado algo que a veces no es tan común en este sector como podría parecer: su alta profesionalidad. Tanto en plazos, como en calidad, facilidad de trato y atención a nuestras necesidades hemos quedado gratamente satisfechos. Gracias a profesionales así se pueden llevar a término los grandes trabajos.",
    name: "Redigna",
  },
  {
    text: "En nuestra reciente experiencia con David F. Barruz y su equipo nos han demostrado algo que a veces no es tan común en este sector como podría parecer: su alta profesionalidad. Tanto en plazos, como en calidad, facilidad de trato y atención a nuestras necesidades hemos quedado gratamente satisfechos. Gracias a profesionales así se pueden llevar a término los grandes trabajos.",
    name: "Wolffdesigna",
  },
  {
    text: "En nuestra reciente experiencia con David F. Barruz y su equipo nos han demostrado algo que a veces no es tan común en este sector como podría parecer: su alta profesionalidad. Tanto en plazos, como en calidad, facilidad de trato y atención a nuestras necesidades hemos quedado gratamente satisfechos. Gracias a profesionales así se pueden llevar a término los grandes trabajos.",
    name: "Redigna",
  },
];

const Testimonio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + opiniones.length) % opiniones.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
    }, 5000); // Cambia cada 5 segundos (5000 milisegundos)

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <>
      <div className={styles.container}>
      <div className={styles.opn}>
          <h2>LO QUE OPINAN LOS CLIENTES</h2>
              <hr />
          </div>
        <div className={styles.carrusel}>
          <button
            onClick={handlePrev}
            className={`${styles.controlButton} ${styles.prevButton}`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {opiniones.map((opinion, index) => (
            <div
              key={index}
              className={styles.opinionContainer}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <p>{opinion.text}</p>
              <h2>{opinion.name}</h2>
            </div>
          ))}
          <button
            onClick={handleNext}
            className={`${styles.controlButton} ${styles.nextButton}`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className={styles.sliderDots}>
          {opiniones.map((_, index) => (
            <div
              key={index}
              className={`${styles.sliderDot} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonio;
