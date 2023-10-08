import styles from "../../pages/Inicio.module.css";
import marca1 from "../../assets/images/Inicio/clientes/axe.webp";
import marca2 from "../../assets/images/Inicio/clientes/corvus-belli.webp";
import marca3 from "../../assets/images/Inicio/clientes/faroffgames.webp";
import marca4 from "../../assets/images/Inicio/clientes/iron-golems.webp";
import marca5 from "../../assets/images/Inicio/clientes/logo-ceu-online.webp";
import marca6 from "../../assets/images/Inicio/clientes/star-player.webp";
import marca7 from "../../assets/images/Inicio/clientes/the-drowned-earth.webp";
import marca8 from "../../assets/images/Inicio/clientes/wolffdesigna.webp";
import marca9 from "../../assets/images/Inicio/clientes/xtreem-sculptures.webp";

const picData = [
  { image: marca1, alt: "Corvus belli", url: "https://www.youtube.com/" },
  { image: marca2 },
  { image: marca3 },
  { image: marca4 },
  { image: marca5 },
  { image: marca6 },
  { image: marca7 },
  { image: marca8 },
  { image: marca9 },
];

const Clientes = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={`${styles.child}`}>
            <h2>
              <span>
                Partners & &nbsp;
                <strong className={styles.texRotat}>
                  <span className={styles.rotating}>
                    <span className={`${styles.front}`}> Colegas</span>
                    <span className={`${styles.back}`}> Clientes</span>
                  </span>
                </strong>
              </span>
            </h2>
            <h3>Muchas personas, un gran equipo</h3>
            <hr />
            <p>
              Para nosotros, los proyectos de nuestros clientes son nuestros
              propios proyectos. Por ello, sus éxitos son también nuestros.{" "}
              <br />
              Clientes y miembros del estudio formamos un gran equipo de trabajo
              donde juntos buscamos el resultado final deseado por todos. <br />
              Un final que cumpla las expectativas de nuestros clientes y a
              nosotros nos haga sentir orgullosos. Trabajamos con compañeros,
              clientes, amigos.
            </p>
          </div>
          {picData.map((cliente, index) => (
            <div
              key={index}
              className={`${styles.child} ${styles.childBrands}`}
            >
              <a href={cliente.url} target="_blank" rel="noopener noreferrer">
                <img src={cliente.image} alt={cliente.alt} title={cliente.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clientes;
