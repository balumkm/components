import React, { Component } from 'react';

class ButtonComponent extends Component{
  constructor(props){
     super(props);

     this.state = {
          color_green: true
     }
}

changeColor(){
    this.setState({color_black: !this.state.color_black})
    alert('dumb changes made by me');
}
  render(){
            let bgColor = this.state.color_black ? "green" : "red"
            let bcolor = this.props.color;
    return(
      <div className="headings">
        <button style={{backgroundColor: bcolor}}
        onClick={this.changeColor.bind(this)}
        >Click to change button color</button>
      </div>
    );
  }

}

export default ButtonComponent;
