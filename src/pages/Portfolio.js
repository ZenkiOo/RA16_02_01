import '../css/portfolio.css';
import PortfolioItems from '../components/data/PortfolioItems';
import { ProjectList } from '../components/ProjectList';
import { Toolbar } from '../components/Toolbar';
import { useState } from 'react';

const Portfolio = () => {
  const portfolioItems = new PortfolioItems();
  const [filters, setFilter] = useState(['All']);

  const selectFilter = (filterName) => {
    setFilter((prevFilters) => {
      console.info(filterName, prevFilters.includes('All') && filterName !== 'All');
      if (filterName === 'All') {
        console.info(0);
        return ['All'];
      } 
      
      else if (prevFilters.includes('All') && filterName !== 'All') {
        console.info(1);
        return [...prevFilters.splice(prevFilters.indexOf('All'), 1), filterName];
      } 
      
      else if (prevFilters.includes(filterName)) {
        if (
          prevFilters.splice(prevFilters.indexOf(filterName), 1).length === 0
        ) {
          console.info(2);
          return ['All'];
        } else {
          console.info(3);
          return [...prevFilters.splice(prevFilters.indexOf(filterName), 1)];
        }
      }
      
      else if (!prevFilters.includes(filterName)) {
        console.info(4);
        return [...prevFilters, filterName];
      }
    });
  };

  const projects = portfolioItems.items.filter((item) => {
    // console.info('filters(projects)', filters);
    if (filters.includes('All')) {
      return true;
    }
    return filters.includes(item.category);
  });

  return (
    <section className='portfolio'>
      {
        <Toolbar
          filters={['All', 'Websites', 'Flayers', 'Business Cards']}
          selected={filters}
          onSelectFilter={selectFilter}
        />
      }
      {<ProjectList projects={projects} />}
    </section>
  );
};
export { Portfolio };
