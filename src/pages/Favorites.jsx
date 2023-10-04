import React from 'react';
import Card from '../Components/Card';
import AppContext from '../Components/context'

function Favorites({items, isAdded, onAddToFavorite}) {
  const {favorites} = React.useContext(AppContext);
  return (
    <div className="content p-40">
      <div>
        <h1>Мои закладки</h1>
      </div>


      <div className="d-flex card_block">
      {favorites
          .map((item) => (
            <Card
            isAdded={isAdded}
              key={item.id}
              {...item} 
              favorited={true}
              onFavorite={onAddToFavorite} 
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
