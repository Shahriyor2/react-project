import styles from "./app.module.scss";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

const arr = [
  {
    tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    tittle: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "./img/sneakers/2.jpg",
  },
  {
    tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    tittle: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      {/* начало корзины */}
      <Drawer />

      {/* заголовок header */}
      <Header />

      {/* сонтент кроссовок*/}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex card_block">
          {arr.map((obj) => (
            <Card
              tittle={obj.tittle}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
