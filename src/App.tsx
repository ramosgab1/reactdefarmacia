import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <div className='min-h-[30vh]'></div>
    <Footer/>
    </>
);
}
export default App;