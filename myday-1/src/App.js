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
     <div className='a'>
       <Join h1="JOIN US" h2="LOGIN" h3="SEARCH" h4="HOME"/>
     <Setting h1="SETTINGS" h2="CONTACT US" h3="HELP" h4="DOWNLOAD"/>
     </div>
      
    </>
     
  );
}

export default App;
