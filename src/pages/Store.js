import '../css/store.css';
import StoreItems from '../components/data/StoreItems';
import { useState } from 'react';
import { Cardsview } from '../components/Cardsview';
import { ListView } from '../components/Listview';
import { IconSwitch } from '../components/IconSwitch';

function Store() {
  const storeItems = new StoreItems();
  const [layout, setLayout] = useState('view_module');

  function onSwitch() {
    setLayout(() => {
      if (layout === 'view_module') return 'view_list';
      return 'view_module';
    });
  }

  return (
    <div className='store'>
      <IconSwitch icon={layout} onSwitch={onSwitch} />
      <>
        {layout === 'view_list' ? (
          <ListView items={storeItems.items} />
        ) : (
          <Cardsview items={storeItems.items} />
        )}
      </>
    </div>
  );
}
export { Store };
