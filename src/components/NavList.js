import { Link } from "react-router-dom";

const NavLink = (item) => (item.link === "/" ? "Home" : item.link);

const NavList = (props) => {
  const listItems = props.items.map((item, idx) => {
    return (
      <Link to={item.link} className="nav-links__link" key={idx}>
        {NavLink(item)}
      </Link>
    );
  });

  return <div className="nav-links">{listItems}</div>;
};
export { NavList };
