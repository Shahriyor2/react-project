import styles from "./Card.module.scss";
import React from "react";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  // const onClickPlus = () => {
  //   setIsAdded(!isAdded);
  // };

  return (
    <div className={styles.card}>
      {/* иконка лайка */}
      <div className="favorite">
        <img src="/img/heart-Unliked.svg" alt="Unliked" />
      </div>

      {/* кроссовки */}
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.tittle}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b>{props.price}</b>
        </div>
        {/* <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="/img/btn-plus.svg" alt="Plus" />
        </button> */}
        <img
          className={styles.plus}
          onClick={() => setIsAdded(!isAdded)}
          src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
