import React from 'react';
import './App.css';
import AnagramForm from './components/AnagramsForm/AnagramForm'
import NavBar from './components/NavBar/NavBar';
import TopTen from './components/TopTen/TopTen'

const App = () => {
  return (
    <div className="AnagramInputs">
        <NavBar/>
        <AnagramForm/>
        <TopTen/>
    </div>
  );
};

export default App;
