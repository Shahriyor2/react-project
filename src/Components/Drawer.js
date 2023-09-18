function Drawer () {
    return (
        <div style={{display: "none"}} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn" src="/img/remove.svg" alt="Remove" /></h2>

          <div className="items flex">
            {/* первый cartItem */}
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 р.</b>
              </div>
              {/* remove */}
              <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
            </div>

            {/* второй cartItem */}
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 р.</b>
              </div>
              {/* remove */}
              <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 р.</b>
              </div>
              {/* remove */}
              <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
            </div>

            
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
            <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="Arrow"/></button>

          </div>

        </div>
      </div>
    );
}

export default Drawer;