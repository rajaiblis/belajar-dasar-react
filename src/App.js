import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    data : "",
    umur : 0
  }

  changeHandler = (event) => {
    const {value,name} = event.target
    console.log(name)
    this.setState({
      [name] : value
    })
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => this.setState({
      data: res
    }) )
  }

  /* jadi this.setState untuk merubah nilai state diatas */
  

  render(){
    const {data} = this.state
    return(
        <div className="App"> 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ihsandroid</h1>
        {/* ternary operator,map, constructor,ambil api yg ? dan :-->*/}
        {data ? 
          data.map(datum => {
            const {title,userId} = datum 
            return <p key={userId + title}>
                    {title} {userId}
                    </p>
          })
          : <h1>Loading....</h1>
        }
{/* karena pakai .map maka di <p> nya harus ada key dari yang kita ambil disini
  adalah title dan userId
  */}
        
      </header>
    </div>

    )
  }
}

export default App;
