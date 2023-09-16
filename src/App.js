import styles from "./app.module.scss";
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>

          <div className="items">
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
            <div className="cartItem d-flex align-center">
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
          
        </div>
      </div>

      {/* заголовок header */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="text-uppercase">
            <h3>React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="img/Корзина.svg" />
            <span>1205 руб.</span>
          </li>

          <li>
            <img src="img/User.svg" />
          </li>
        </ul>
      </header>

      {/* сонтент */}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex card_block">
          {/* первая карта */}
          <div className="card">
            {/* иконка лайка */}
            <div className="favorite">
              <img src="/img/heart-Unliked.svg" alt="Unliked" />
            </div>

            {/* кроссовки */}
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          {/* вторая карта */}
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          {/* третья карта */}
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          {/* четвёртая карта */}
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          {/* пятая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/5.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Under Armour Curry 8 </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>15 199 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
            </div> */}

          {/* шестая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/6.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>11 299 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
            </div>
 */}
          {/* седьмая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/7.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Jordan Air Jordan 11 </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>10 799 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
            </div> */}

          {/* восьмая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/8.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>16 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
            </div> */}

          {/* девятая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/9.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>13 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
            </div> */}

          {/* десятая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
            </div> */}

          {/* одинадцатая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
            </div> */}

          {/* двенадцатая карта */}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/10.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>11 299 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div> 
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
