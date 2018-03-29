import React, { Component } from 'react';

class BackcolorComponent extends Component{
  constructor(){
     super();
     this.state = {
          color_green: true

     }
     }
     changeColor(){
         this.setState({color_black: !this.state.color_black});
         this.props.propcolor();
         
}

  render(){
    let bgColor = this.state.color_black ? "green" : "Black"
    return(

      <div style={{backgroundColor: bgColor}}>
        <table>
        <tr>
        <td >
        <button
          onClick={this.changeColor.bind(this)}>Click to change Backcolor
        </button>
        </td>
        </tr>
        </table>
      </div>

    );
  }

}

export default BackcolorComponent
