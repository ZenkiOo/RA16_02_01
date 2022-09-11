import PropTypes from 'prop-types';
import { ShopCard } from './ShopCard';
function Cardsview(props) {
  const listItems = props.items.map((item, idx) => {
    return (
      <li className='cards__item' key={idx}>
        <ShopCard card={item} />
      </li>
    );
  });
  return <ul className='cards'>{listItems}</ul>;
}
Cardsview.propTypes = {
  items: PropTypes.array,
};
export { Cardsview };
