import '../css/store.css';
import { useState } from 'react';

function Store() {
  const [layout, setLayout] = useState('view_list');
  return <div className="store">STORE</div>;
}
export { Store };
