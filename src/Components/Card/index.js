import styles from "./Card.module.scss";
import React from "react";

function Card({tittle, imageUrl, price, id, onFavorite, onAddToCart, onDeleteFromCart, isAdded}) {
  // const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false)

  const onClickPlus = () => {
    onAddToCart({tittle, imageUrl, price, id});
  };

  const onDelete = () => {
    onDeleteFromCart(id)
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }
  

  return (
    <div className={styles.card}>  
      {/* иконка лайка */}
      <div onClick={onFavorite} className="favorite">
        <img onClick={onClickFavorite} className="cu-p" src= {isFavorite ? "/img/heart-liked.svg" : "/img/heart-Unliked.svg" } alt="Unliked" />
      </div>

      {/* кроссовки */}
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{tittle}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={isAdded(id) ? onDelete : onClickPlus}
          src={isAdded(id) ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
