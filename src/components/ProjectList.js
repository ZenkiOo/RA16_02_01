import PropTypes from 'prop-types';
const ProjectList = (props) => {

  const listItems = props.projects.map((item, idx) => {
    return (
      <li className='projects__item' key={idx}>
        <span className='projects__item-desc'>{item.category}</span>
        <img src={item.img} alt={item.category}/>
      </li>
    );
  });
  return <ul className='projects__list'>{listItems}</ul>;
};
ProjectList.propTypes = {
  projects: PropTypes.array
};
export { ProjectList };
