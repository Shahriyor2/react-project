import Card from '../Components/Card';
function Favorites({items, isAdded, onAddToFavorite}) {
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
