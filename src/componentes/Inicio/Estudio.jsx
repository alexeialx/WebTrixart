import styles from "../../pages/Inicio.module.css";
import team from "../../assets/images/Inicio/equipo2.webp";

const Estudio = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.child}>
            <img src={team} alt="" />
          </div>
          <div className={styles.child}>
            <h2>
              <span>
                <strong>El</strong> estudio
              </span>
            </h2>
            <hr />
            <p>
              Si además de profesionales que lleven a cabo tu proyecto de
              modelado 3D estás buscando personas que se apasionen por él, somos
              lo que querías. <br />
              Nos encanta nuestro trabajo y cada proyecto que realizamos lo
              hacemos nuestro. <br />
              Siempre vamos un paso más allá formando equipo con nuestros
              clientes, esforzándonos al máximo por mejorar y superándonos en
              cada proyecto para alcanzar la máxima calidad.
            </p>
          </div>
        </div>
        <div className={styles.containerEst}>
          <div
            className={`${styles.child} ${styles.bgEst1} ${styles.childWhite}`}
          >
            <h3>¿QUÉ HACEMOS?</h3>
            <hr />
            <p>
              Hacemos aquello que amamos y amamos todo lo que hacemos. <br />
              Nos dedicamos a la creación de personajes en 3D, desde la
              conceptualización artística hasta la preparación final, ya sea
              para la producción de figuras y miniaturas o animación 3D.
            </p>
            <button className={styles.btnSec}>
              <a href="">LO QUE HACEMOS</a>
            </button>
          </div>
          <div
            className={`${styles.child} ${styles.bgEst2} ${styles.childWhite} ${styles.childDark}`}
          >
            <h3>¿QUÉ HACEMOS?</h3>
            <hr />
            <p>
              Hacemos aquello que amamos y amamos todo lo que hacemos. <br />
              Nos dedicamos a la creación de personajes en 3D, desde la
              conceptualización artística hasta la preparación final, ya sea
              para la producción de figuras y miniaturas o animación 3D.
            </p>
            <button className={`${styles.btnSec} ${styles.btnSecDark}`}>
              <a href="">LO QUE HACEMOS</a>
            </button>
          </div>
          <div
            className={`${styles.child} ${styles.bgEst3} ${styles.childWhite}`}
          >
            <h3>¿QUÉ HACEMOS?</h3>
            <hr />
            <p>
              Hacemos aquello que amamos y amamos todo lo que hacemos. <br />
              Nos dedicamos a la creación de personajes en 3D, desde la
              conceptualización artística hasta la preparación final, ya sea
              para la producción de figuras y miniaturas o animación 3D.
            </p>
            <button className={styles.btnSec}>
              <a href="">LO QUE HACEMOS</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estudio;
