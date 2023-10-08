import styles from './Servicios.module.css';
import spiderman from '../assets/images/servicios/spiderman.jpg';

const Servicios = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.fillContainer}>
          <h2>MUCHO MÁS QUE ESCULTURA 3D</h2>
          <p>Descubre todo lo que podemos hacer por ti</p>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.textBox}>
            <h2>¡TRABAJEMOS JUNTOS EN TU NUEVO PROYECTO!</h2>
          </div>
          <div className={styles.buttonHolder}>
            <button className={`btn btn-outline-warning`}>Pregúntanos</button>
          </div>
        </div>

        <div className={styles.modelContainer}>
          <div className={styles.modelImgContainer}>
            <img className={styles.modelImg} src={spiderman} alt="" />
          </div>
          <div className={styles.wrapper}>
            <h2>Conceptualización 3D</h2>
            <p>
              A la hora de crear un personaje para escultura 3D siempre partimos de una idea, pero además, es necesario conocerlo. Esto lo conseguimos a través de la creación literaria del mismo, es decir, definiendo su carácter, metas, miedos e historia.
              <br />
              <br />
              Ya sabiendo a quién queremos crear, es el turno de buscar referencias estéticas que nos ayuden a definir el personaje. Gracias a esta búsqueda podremos realizar el Concept Art, o boceto ilustrado en 2D, o directamente una escultura básica en 3D que nos ayude a saber si lo que estamos creando  funciona.
              <br />
              <br />
              Teniendo en cuenta las especificaciones y necesidades del proyecto, empezaremos a trabajar una pose atractiva. También se incluirán los diferentes elementos, como armas o ropa, que junto con la pose forme una composición que consiga transmitir y contar su historia.
            </p>
          </div>
        </div>
        <div className={styles.modelado}>
          <h2>Modelado Orgánico</h2>
        </div>
      </div>
    </section>
  );
}
 export default Servicios;