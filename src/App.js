import React from 'react';
import './App.css';

// import DaftarMinuman from './daftar/DaftarMinuman';
import Daftarmakanan from './daftar/daftarMakanan';

function App() {
  return (
    <div className="App">
    <h1> Selasa React </h1>
    <Daftarmakanan menuMakanan={[
      { 
        nama : 'Mie Ayam',
        harga : 20000
      },
      {
        nama : 'Bakso Sapi',
        harga : 30000
      },
      {
        nama : 'Sate',
        harga : 40000
      }
      ] }/>
          </div>

    );
}

export default App;
