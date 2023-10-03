import { Link } from "react-router-dom";

function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            className="mr-15"
            src="/img/logo.png"
            alt=""
          ></img>
          <div className="text-uppercase">
            <h1 className="">REACT SNEAKERS</h1>
            <p className="opacity-5">Магазин самых лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex align-center ul-pct">
        <li onClick={onClickCart} className="d-flex cu-p align-center mr-30">
          <img className="mr-10" src="img/Корзина.svg" alt="Cart" />
          <span>1205 руб.</span>
        </li>

        <li className="mr-15 cu-p" >
          <Link to="/favorites">
            <img src="img/Heart.svg" alt="Закладки" />
          </Link>
        </li>

        <li>
          <img src="img/User.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
