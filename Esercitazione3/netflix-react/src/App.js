import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiaNavbar from './components/MiaNavbar';
import MioFooter from './components/MioFooter';
import Profilo from './components/Profilo';
import Impostazioni from './components/Impostazioni';
import Homepage from './page/Homepage';
import MovieDetail from './components/MovieDetail';


function App() {
  return (

    <Router>
      <div className="container">
        <MiaNavbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Profilo" element={<Profilo />} />
          <Route path="/Impostazioni" element={<Impostazioni/>} />
          <Route path="/detail/:id"  element={<MovieDetail/>}/>

        </Routes>
        <MioFooter />
      </div>
    </Router>
  );
}

export default App;
