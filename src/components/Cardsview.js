function Cardsview(props) {
  const listItems = props.items.map((item, idx) => {
    console.log(item);
    return (
      <li className='store__item' key={idx}>
        <span>{item.name}</span>
        <span>{item.price}</span>
        <span>{item.color}</span>
        {/* <span>{item.img}</span> */}
        <img src={item.img} />
      </li>
    );
  });
  return <ul className='store__list'>{listItems}</ul>;
}
export { Cardsview };
