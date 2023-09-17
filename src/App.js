import styles from "./app.module.scss";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";


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
          <Card />

        </div>
      </div>
    </div>
  );
}

export default App;
