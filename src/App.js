// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      <Route path='/home' element={<Home/>}></Route>

    </Routes>
    </>
   
  );
}

export default App;
