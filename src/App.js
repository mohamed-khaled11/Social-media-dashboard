import './App.css';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Overview from './Components/Overview/Overview'
import { useState } from 'react';
function App() {
  const [darkMode,setDarkMode] = useState(false)
  const btnSwitch = (e)=>{
    setDarkMode(e.target.checked)
  } 
  return (
    <div className={darkMode === true?"App h-screen dark":"App h-screen"}>
      <div className="bg-slate-900 dark:bg-white h-full">
          <Header btnSwitch={btnSwitch}></Header>
        <div className='container mt-[-100px]'>
            <Cards></Cards>
            <Overview></Overview>
        </div>
      </div>
    </div>
  );
}

export default App;
