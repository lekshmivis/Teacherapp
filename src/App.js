import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Add from './Components/Add';
import Search from './Components/Search';
import Delete from './Components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/delete' element={<Delete/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
