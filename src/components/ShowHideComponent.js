import React, { Component } from 'react';
class ShowHideForm extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>This is a simple example to show or hide the text!!!</div>
    )
  }
}



class ShowHideComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  render() {
    return (
      <div>
        <p>Show Hide example</p>
         <a onClick={this.onClick.bind(this)} href='#'>Click here to know more...</a>
        {this.state.showReply && < ShowHideForm / >}
      </div>
    )
  }
}
export default ShowHideComponent;
