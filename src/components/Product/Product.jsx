import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import "./Product.css";
const Product = ({ producto }) => {
  return (
    <Grid item xs={4} className="gridProduct">
      <Card className="cardProduct" sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={producto.Imagen}
            alt={producto.TipoProducto}
            className="imgProduct"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              className="titleProduct"
            >
              {producto.TipoProducto}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
            >
              ${producto.Precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="buttonProduct">
          <Button size="small" variant="contained">
            Ver producto
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
