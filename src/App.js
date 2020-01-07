import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentKu from './componentKu'


class App extends React.Component {
  state = {
    pekerjaan : "Web Developer",
    tempatTinggal : "Tangsel",
    umur: 24,
    laptop : "acer",
    merk : "ori"
  }
  render(){
    return(
        <div className="App"> 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ihsandroid</h1>
        <ComponentKu 
        {... this.state}
        />
      </header>
    </div>
    )
  }
}

export default App;
/**
 * {... this.state} berguna untuk jika kita punya banyak data di dalam object state
 * dan cara ini dinamakan rest and spread props atau penggabungan sehingga mau ada
 * 100 data di state akan mudah dimasukkan dan enak dibaca cukup menambahkan ... 
 * sebelum kode kita
 */