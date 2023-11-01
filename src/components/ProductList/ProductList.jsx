import Product from "../Product/Product";
import Container from "@mui/material/Container";
import "./ProductList.css";
import { Grid } from "@mui/material";

const ProductList = ({ productos }) => {
  return (
    <div className="ProductList">
      <div className="productos">
        <Container maxWidth="lg">
          <Grid container spacing={2} className="gridProducts">
            {productos.map((prod) => (
              <Product producto={prod} key={prod.id} />
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ProductList;
