import "./StorePage.css";
import imgStore from "../../assets/PortadaStore.png";

const StorePage = () => {
  return (
    <div className="StorePage">
      <div className="portadaStore">
        <img
          src={imgStore}
          alt="Camisetas del Mundial"
          className="imgPortadaStore"
        />
        <h1 className="h1PortadaStore">Tienda</h1>
      </div>
    </div>
  );
};

export default StorePage;
