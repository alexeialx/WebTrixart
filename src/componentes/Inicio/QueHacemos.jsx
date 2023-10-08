import styles from "../../pages/Inicio.module.css";
import numer5 from "../../assets/images/Inicio/number5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faRocket,
  faStar,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const QueHacemos = () => {
  return (
    <>
      <div className={`${styles.parent}`}>
        <div className={styles.parTitle}>
          <h2>PODEMOS MODELAR PARA TI, PERO… ¿QUÉ MÁS TE OFRECEMOS?</h2>
          <hr />
        </div>
        <div className={`${styles.rowParent}`}>
          <div className={`${styles.container} ${styles.rowContainer}`}>
            <div className={styles.child}>
              <div
                className={`${styles.childContainer} ${styles.childContDer}`}
              >
                <div className={styles.childContent}>
                  <h3 className={styles.firstChild}>
                    <span>QUE PARTICIPES EN TU PROYECTO</span>
                  </h3>
                  <FontAwesomeIcon
                    icon={faUserGroup}
                     className={`${styles.icon} ${styles.secondChild}`}
                  />
                </div>
                <div>
                  <p>
                    Para nosotros es vital que formes parte de tu propio
                    proyecto. Además de en la idea inicial, estarás presente y
                    serás una parte importante durante todo el proceso.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.childContainer} ${styles.childContDer}`}
              >
                <div className={styles.childContent}>
                  <h3 className={styles.firstChild}>QUE PARTICIPES EN TU PROYECTO</h3>

                  <FontAwesomeIcon
                    icon={faRocket}
                    className={`${styles.icon} ${styles.secondChild}`}
                  />
                </div>
                <div>
                  <p>
                    Para nosotros es vital que formes parte de tu propio
                    proyecto. Además de en la idea inicial, estarás presente y
                    serás una parte importante durante todo el proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.childBg}>
              <div className={`${styles.child}`}>
                <img src={numer5} alt="" />
            </div>
          </div>
          <div className={`${styles.container} ${styles.rowContainer}`}>
            <div className={styles.child}>
              <div className={styles.childContainer}>
                <div className={styles.childContent}>
                  <h3>QUE PARTICIPES EN TU PROYECTO</h3>

                  <FontAwesomeIcon
                    icon={faComments}
                    className={styles.icon}
                  />
                </div>
                <div>
                  <p>
                    Para nosotros es vital que formes parte de tu propio
                    proyecto. Además de en la idea inicial, estarás presente y
                    serás una parte importante durante todo el proceso.
                  </p>
                </div>
              </div>
              <div className={styles.childContainer}>
                <div className={styles.childContent}>
                  <h3>
                    <span>QUE PARTICIPES EN TU PROYECTO</span>
                  </h3>

                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                </div>
                <div>
                  <p>
                    Para nosotros es vital que formes parte de tu propio
                    proyecto. Además de en la idea inicial, estarás presente y
                    serás una parte importante durante todo el proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueHacemos;
