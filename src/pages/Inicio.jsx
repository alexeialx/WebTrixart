
import Slider from "../componentes/inicio/Slider";
import images from "../componentes/inicio/images";
import Card from "../componentes/Inicio/Card";
import Modeling from "../componentes/Inicio/Modeling";
import FeaturesSection from "../componentes/Inicio/FeaturesSection";
import Galery from "../componentes/Inicio/Galery";
import Estudio from "../componentes/Inicio/Estudio";
import Clientes from "../componentes/Inicio/Clientes";
import Testimonio from "../componentes/Inicio/Testimonio";
import QueHacemos from "../componentes/Inicio/QueHacemos";


const Inicio = () => {
  return (
    <>
      <Slider images={images} />
      <Card/>
      <Modeling/>
      <FeaturesSection/>
      <Galery/>
      <Estudio/>
      <Clientes/>
      <Testimonio/>
      <QueHacemos/>
    </>
  );
};

export default Inicio;
