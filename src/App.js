import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Protect from './components/Protect'
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route element={<Protect/>}/>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />


    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />

    </Routes>
  
    </div>
  );
}

export default App;
