import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import ButtonComponent from './components/ButtonComponent';
import ShowHideComponent from './components/ShowHideComponent'
import BackcolorComponent from './components/BackcolorComponent'

class App extends Component {
  constructor(props){
     super(props);

     this.state = {
          color: 'yellow'
     }
   }
  tellColor(){
      this.setState({color: 'pink'});
      //alert('Back color component is clicked!');


  }
  render() {
    return (
      <div className="App">
        <table border="1" width="60%" BORDERCOLOR="Blue" >
        <tr>
          <td width="20%">
            <ButtonComponent color={this.state.color} />
          </td>
          <td width="25%">
            <ShowHideComponent />
          </td>
          <td width="15%">
            <BackcolorComponent propcolor={this.tellColor.bind(this)}/>
          </td>
        </tr>
        </table>
      </div>
    );
  }
}

export default App;
