import PropTypes from 'prop-types';
function ShopCard(props) {
  const { card } = props;
  return (
    <div className='card'>
      <img alt={card.name} className='img' src={card.img} />
      <span className='name'>{card.name}</span>
      <span className='color'>{card.color}</span>
      <span className='price'>{card.price}$</span>
      <button className='cart_btn'>
        <i className='material-icons'>shopping_cart</i>
      </button>
    </div>
  );
}
ShopCard.propTypes = {
  card: PropTypes.object
};
export { ShopCard };
