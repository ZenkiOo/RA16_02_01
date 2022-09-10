import '../css/store.css';
import StoreItems from '../components/data/StoreItems';
import { useState } from 'react';
import { Cardsview } from '../components/Cardsview';
import { ListView } from '../components/Listview';

function Store() {
  const storeItems = new StoreItems();

  function onSwitch() {
    setLayout(() => 'view_list');
  }

  const [layout, setLayout] = useState('view_module');
  return (
    <div className='store'>
      <>
        <button onClick={onSwitch}>X</button>
        list
        {layout === 'view_list' ? <ListView items={storeItems.items} /> : null}
      </>
      <>
        cards
        {layout === 'view_module' ? (
          <Cardsview items={storeItems.items} />
        ) : null}
      </>
    </div>
  );
}
export { Store };
