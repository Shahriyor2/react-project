import React from 'react';
import Card from '../Components/Card';
import { AppContext } from '../App';

function Favorites({items, isAdded, onAddToFavorite}) {
  const state = React.useContext(AppContext)

  return (
    <div className="content p-40">
      <div>
        <h1>Мои закладки</h1>
      </div>


      <div className="d-flex card_block">
      {items
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
