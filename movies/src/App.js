import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/HomePage'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import SearchMovie from './Components/SearchMovie'
import MovieDetails from './Components/MovieDetails'
import PageNotFound from './Components/PageNotFound'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <SearchMovie/>
      <div className='container'>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/movieList'  element={<MovieList/>} />
        <Route path='/addMovie'  element={<AddMovie/>} />
        <Route path='/movie/:Title'  element={<MovieDetails/>} />
        <Route path ='*' element={<PageNotFound/>} />
      </Routes>
      </div>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
