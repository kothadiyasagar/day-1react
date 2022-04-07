import logo from './logo.svg';
import './App.css';
import Static from './stactic-card';
import Join from './joinUs';
import { getByDisplayValue } from '@testing-library/react';
import Setting from './settings';
function App() {
  return (
    <>
     <Static/>
     <div className='a'><Join/>
     <Setting/>
     </div>
      
    </>
     
  );
}

export default App;
