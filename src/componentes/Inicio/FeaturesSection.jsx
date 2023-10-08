import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faGamepad, faVideo } from "@fortawesome/fontawesome-free-solid";
import styles from '../../pages/Inicio.module.css';
import marca from '../../assets/images/Trixart.svg';

const featuresData = [
  {
    icon: faPrint,
    title: 'MODELADO PARA IMPRESIÓN 3D',
    description: 'Para que no te pierdas la ilusión que se siente al tener algo entre las manos, modelamos tus personajes de una forma óptima para su posterior impresión 3D y producción.'
  },
  {
    icon: faVideo,
    title: 'MODELADO PARA IMPRESIÓN 3D',
    description: 'Para que no te pierdas la ilusión que se siente al tener algo entre las manos, modelamos tus personajes de una forma óptima para su posterior impresión 3D y producción.'
  },
  {
    icon: faGamepad,
    title: 'MODELADO PARA IMPRESIÓN 3D',
    description: 'Para que no te pierdas la ilusión que se siente al tener algo entre las manos, modelamos tus personajes de una forma óptima para su posterior impresión 3D y producción.'
  }
];

const FeaturesSection = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.bgImage}>
        <div className={styles.bgContainer1}>
          {featuresData.map((feature, index) => (
            <div key={index} className={`${styles.container} ${styles.childIcon}`}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={feature.icon} style={{ fontSize: "40px", color: "white" }} />
              </div>
              <div className={`${styles.child} ${styles.childWhite}`}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
          <div className={styles.bgContainer2}>
            <div className={styles.container}>
              <img className={styles.marca} src={marca} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
