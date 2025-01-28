import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainor from './components/ItemListContainor/ItemListContainor';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <h2>Bienvenido a eShop</h2>
        <p>Explora nuestros productos y encuentra lo que necesitas.</p>
        <ItemListContainor greeting="¡Hola, bienvenido a nuestra tienda!" />
      </main>
    </div>
  );
}

export default App;
