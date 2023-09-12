import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App(){
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda online!"/>
    </div>
  );
};

export default App;