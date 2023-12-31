import React, { useContext, useState } from "react";
import { Info } from "./Info";
import AppContext from "./context";

function Drawer({ onClose, onDeleteFromCart, cartItems }) {
  const [isOrderComplete, setisOrderComplete] = useState(false);
  const {setCartItems} = useContext(AppContext)

  const onClickOrder = () => {
    setisOrderComplete(true);
    setCartItems([]);
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/remove.svg"
            alt="Remove"
          />
        </h2>

        {cartItems.length > 0 ? (
          <div className="d-flex flex-column flex overhidd">
            <div className="items">
              {cartItems?.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.tittle}</p>
                    <b>{obj.price}</b>
                  </div>

                  <img
                    onClick={() => onDeleteFromCart(obj.id)}
                    className="removeBtn"
                    src="/img/remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>

                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"} description = {isOrderComplete ? "Ваш заказ #18 скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image = {isOrderComplete ? "/img/complete-order.png" : "/img/corobka.jpg"} />
        )}
      </div>
    </div>
  );
}

export default Drawer;
