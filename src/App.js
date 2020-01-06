import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentKu from './componentKu'

/*import dan from itu bebas arti dari "./" itu berarti dalam satu folder
yang akan kalian export untuk nama import menurut guide harus sama dengan
nama compenent yang akan kalian export bedanya huruf awalnya jadi KAPITAL
Semua
*/

class App extends React.Component {
  render(){
    return(
        <div className="App"> 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ihsandroid</h1>
        <ComponentKu pekerjaan = "Web Developer" tempatTinggal = "Tangsel" umur = "24" />
      </header>
    </div>
    )
  }
}

export default App;

/** ingat props adalah cara passing 
 * component satu dengan component lain
 * dalam kasus ini si App.js adalah parent dari componentKu.js
 * cara pertama memunculkan props nya langsung seperti <ComponentKu/>
 * cara kedua disini 'pekerjaan=' kita buat menjadi props lalu tambahkan di componentKu.js
 * <ComponentKu pekerjaan = "Web Developer" tempatTinggal = "Tangsel" umur = "24" /> perhatikan spasinya yah
 * jika penulisan pekerjaan="Web Developer" maka tidak akan muncul tapi jika pekerjaan = "Web Developer" baru muncul
*/