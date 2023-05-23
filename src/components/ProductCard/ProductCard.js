import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import modules from "./ProductCard.module.css";
import Rating from "@mui/material/Rating";

const ProductCard = ({ product }) => {
  const [value, setValue] = useState(product?.rating || 0);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className={modules.Card}>
      <CardActionArea>
        <CardMedia
          className={modules.CardImages}
          component="img"
          height="140"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent className={modules.contentWrapper}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">{product.price + "$"}</Button>
        <Rating
          name="half-rating-read"
          value={value}
          readOnly
          onChange={handleRatingChange}
          precision={0.1}
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
