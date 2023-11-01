import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = ({ productos }) => {
  return (
    <div className="ProductList">
      <div className="productos">
        {productos.map((prod) => (
          <Product producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
