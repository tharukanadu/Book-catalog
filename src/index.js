import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './Compornents/BookList/BookList';
import BookDetails from './Compornents/BookDetails/BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path='/' element = {<Home />}>
      <Route path='/' element = {<About />}/>
      <Route path='/' element = {<BookList />}/>
      <Route path='/' element = {<BookDetails />}/>
     
      </Route>
  </Routes>
  </BrowserRouter> 
);

