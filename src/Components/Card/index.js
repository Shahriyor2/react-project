import styles from './Card.module.scss';

console.log(styles);

function Card(props) {

  const onClickButton = () => {
    alert(props.tittle);
  }

  return (
    <div  className={styles.card}>
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
        <button className="button" onClick={onClickButton}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
} 

export default Card;  