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
    merk : "ori",
    data : "",
    angka : 0
  }

changeHandler = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  render(){
    return(
        <div className="App"> 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ihsandroid</h1>
        <input 
          type="text"
          value={this.state.data}
          onChange={this.changeHandler}
          name="data"
        />
        <input 
          type="number"
          value={this.state.angka}
          onChange={this.changeHandler}
          name="angka"
        />
        <ComponentKu hasilKu={this.state.data} angkaKu={this.state.angka}
        />
      </header>
    </div>
    )
  }
}

export default App;

/**
 * disini kita buat arrow func dengan args event karena ini untuk merubahnya
 * dan menggunakan this.setState lalu di dalam () kita kasih func berbentuk object {}
 * maka ketika kita ketik dalam kolom input maka akan merubah data hasilKu dan memanggil
 * props hasilKu di componentKu.js
 * di input kedua kita ganti jadi angka dan di state kita kasih angka dan mulai dari 0
 * sehingga kita merubah this.state.angka dan name=angka
 * dan tambahkan angkaKu={this.state.angkaKu} di dalam JSX componentKu
 * onchange masih sama karena kita memakai 1 func untuk semua nya.
 * this.setState({
    data : event.target.value ini untuk data biasa, kalau untuk lebih dari 1 kita buat jadi array
    contoh :
    this.setState({
    [event.target.name]: event.target.value
    ingat harus sesuai this.state dengan state yang ada contoh {this.state.angka} berarti memanggil state angka
    karena kita sudah buat state angka yang tadi
 */