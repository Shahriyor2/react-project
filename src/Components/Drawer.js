function Drawer({ onClose, onDeleteFromCart, cartItems, onRemove }) {
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
          <idv>
            <div className="items flex">
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
              <button className="greenButton">
                Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </idv>
        ) : (
          <div className="cartEmpty d-flex flex-column align-center flex">
            <img width={120} height={120} src="img/corobka.jpg" alt="corobka" />
            <h2 className="mb-10">Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className="greenButton">
            <img src="img/arrow.svg" alt="Arrow"/>
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
