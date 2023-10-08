import React from 'react';
import styles from '../../pages/Inicio.module.css';
import modelImg1 from '../../assets/images/Inicio/number5.jpg';

const Modeling = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.child}>
            <img src={modelImg1} alt="" />
          </div>
          <div className={styles.child}>
            <h2>
              <span>
                <strong>Modelado 3D</strong> de personajes
              </span>
            </h2>
            <h3 className={styles.rotate}>Ideas que cobran vida</h3>
            <p>
              Cada personaje cuenta una historia única a través de su gesto,
              ropa, herramientas y pose. Nuestro trabajo es dar vida a esa
              historia modelando en 3D cada personaje para llevarlo a la
              pantalla e incluso a tus manos.
            </p>
            <button className={styles.btn}>
              <a href="">Descubre más</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modeling;
