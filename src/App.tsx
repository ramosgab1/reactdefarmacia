import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categorias/listaCategoria/listaCategoria';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <><BrowserRouter>
    <Navbar/>
    <Home/>
    <div className='min-h-[60vh]'>
    <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
);
}
export default App;