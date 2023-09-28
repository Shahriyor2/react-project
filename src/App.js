import React from "react";
import Card from "./Components/Card/index";
import axios from "axios";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Emptycart from "./Components/Emptycart";

// const arr = [
//   {
//     tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
//     ptice: 12999,
//     imageUrl: "/img/sneakers/1.jpg",
//   },
//   {
//     tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
//     ptice: 12999,
//     imageUrl: "/img/sneakers/1.jpg",
//   },
// ];

function App() {
  //Кроссовки в Drawer
  const [cartItems, setCartItems] = React.useState([]);

  // открытие Drawer
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  //массив наших кроссовок
  const [items, setItems] = React.useState([]);
  const [Favorites, setFavorites] = React.useState([]);

  // const fetchItems = async () => {
  //   fetch(`https://6509820cf6553137159b94c2.mockapi.io/items`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // };

  // React.useEffect(() => {
  //   fetchItems()
  // },[])

  const getCart = async () => {
    axios
      .get(`https://6509820cf6553137159b94c2.mockapi.io/cart`)
      .then((res) => {
        setCartItems(res.data);
      });
  };

  React.useEffect(() => {
    axios
      .get(`https://6509820cf6553137159b94c2.mockapi.io/items`)
      .then((res) => {
        setItems(res.data);
      });
    getCart();
  }, []);

  const onAddToCart = (obj) => {
    axios
      .post(`https://6509820cf6553137159b94c2.mockapi.io/cart`, obj)
      .then((res) => getCart());
  };

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const onDeleteFromCart = (id) => {
    const currentItem = cartItems.find((item) => item.id === id);
    const { new_id } = currentItem;
    axios.delete(`https://6509820cf6553137159b94c2.mockapi.io/cart/${new_id}`);
    setCartItems(cartItems.filter((e) => e.id !== id));
  };

  // const onRemoveItem = (id) => {
  //   axios.delete(`https://6509820cf6553137159b94c2.mockapi.io/cart/${id}`);
  //   setCartItems((prev) => prev.filter(item => item.id !== id));
  // };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    setFavorites((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {/* начало корзины */}
      {cartOpened ? (
        <Drawer
          onDeleteFromCart={onDeleteFromCart}
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          // onRemove={onRemoveItem}
        />
      ) : (
        ""
      )}

      {/* заголовок header */}
      <Header onClickCart={() => setCartOpened(true)} />

      {/* сонтент кроссовок*/}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/img/remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск"
            ></input>
          </div>
        </div>

        {/* карты */}
        <div className="d-flex card_block">
          {items
            .filter((item) =>
              item.tittle.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                isAdded={isAdded}
                cartItems={cartItems}
                key={item.id}
                {...item}
                onDeleteFromCart={onDeleteFromCart}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onAddToCart={onAddToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
