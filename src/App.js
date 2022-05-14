import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  async function getAllContests() {
    let response = await fetch(`https://kontests.net/api/v1/all`);
    let dataGot = await response.json();
    setData(dataGot);
    return dataGot;
  }
  useEffect(() => {
    getAllContests();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar data={data} />
        <Routes>
          {/* <Route path="/" element={<Landing_Page />} /> */}
          <Route path="/" element={<Home data={data}/>} />
          <Route path="filter" element={<Filter data={data} />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
