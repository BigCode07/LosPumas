import Container from "@mui/material/Container";
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
    <Container maxWidth="lg">
      <Grid container spacing={2} className="gridProducts">
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={producto.Imagen}
                alt={producto.TipoProducto}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
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
              <Button size="large" variant="contained">
                Ver producto
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
