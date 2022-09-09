const Toolbar = (props) => {
  const onSelect = (e, filterName) => {
    props.onSelectFilter(filterName);
    console.info(e, filterName);
  };

  const filtersList = props.filters.map((item, idx) => {
    return (
      <li className="filters__item" key={idx}>
        <button
          className="filters__tag"
          key={item + idx}
          onClick={(e) => onSelect(e, item)}
        >
          {item}
        </button>
      </li>
    );
  });
  return <ul className="filters__list">{filtersList}</ul>;
};
export { Toolbar };
