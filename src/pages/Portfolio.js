import '../css/portfolio.css';
import PortfolioItems from '../components/data/PortfolioItems';
import { ProjectList } from '../components/ProjectList';
import { Toolbar } from '../components/Toolbar';
import { useState } from 'react';

const Portfolio = () => {
  const portfolioItems = new PortfolioItems();
  const [filters, setFilter] = useState(['All']);

  const selectFilter = (filterName) => {
    setFilter(() => {
      return filterName;
    });
  };

  const projects = portfolioItems.items.filter((item) => {
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
