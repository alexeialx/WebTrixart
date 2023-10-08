import styles from "../../pages/Inicio.module.css";
import cardImg1 from "../../assets/images/Inicio/1.jpg";
import cardImg2 from "../../assets/images/Inicio/2.jpg";
import cardImg3 from "../../assets/images/Inicio/3.jpg";

const cardData = [
  { image: cardImg1, title: "CONCEPTUALIZACIÓN 3D" },
  { image: cardImg2, title: "ESCULTURA DIGITAL" },
  { image: cardImg3, title: "PREPARACIÓN PARA IMPRESIÓN 3D" },
];

const Card = () => {
  return (
    <>
      <div className={styles.parent}>
        <h1>Estudio de Escultura Digital y Modelado 3D</h1>
        <div className={styles.container}>
          {cardData.map((card, index) => (
            <div key={index} className={(styles.child, styles.vcBoxCircle)}>
              <img src={card.image} alt="" />
              <h4>{card.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
