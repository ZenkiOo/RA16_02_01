import PropTypes from 'prop-types';
function ShopItem(props) {
  const { item } = props;
  return (
    <div className='item'>
      <img alt={item.name} className='img' src={item.img} />
      <span className='name'>{item.name}</span>
      <span className='color'>{item.color}</span>
      <span className='price'>{item.price}$</span>
      <button className="cart_btn">
        <i className='material-icons'>shopping_cart</i>
      </button>
    </div>
  );
}
ShopItem.propTypes = {
    item: PropTypes.object
  };
export { ShopItem };
