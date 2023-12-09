import styles  from '../css/App.module.css';
import { Outlet } from 'react-router-dom';
import { Barravertical } from '../components/barravertical'

function App() {
  return (
    <div className={styles.App}>
     <Outlet  />
     <Barravertical  />
     
    
    </div>
  );
}

export default App;
