import PropTypes from 'prop-types';
import { ShopItem } from "./ShopItem";
function ListView(props) {
    const listItems = props.items.map((item, idx) => {
      return (
        <li className='list__item' key={idx}>
          <ShopItem item={item}/>
        </li>
      );
    });
    return <ul className='list'>{listItems}</ul>;
  }
  ListView.propTypes = {
    items: PropTypes.array
  };
  export { ListView };