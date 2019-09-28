import React from 'react';
import './App.css';
import Categories from './components/Categories';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Categories />
    </div>
  );
}

export default App;
