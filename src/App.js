import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import LiveScore from './components/LiveScore'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CountryList from './components/CountryList';
import PointList from './components/PointList';

function App() {
  return (
    <>


      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='live' element={<LiveScore/>}/>
            <Route path='country' element={<CountryList/>}/>
            <Route path='point' element={<PointList/>}/>

          </Route>
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
