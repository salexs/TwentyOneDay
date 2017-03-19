import React, { Component } from 'react';


class Header extends Component {

  handleLog() {
    this.props.login();
    this.props.loadAvatar()
  }

  render() {
    return (
      <div>
         <div>21 day</div>
         <div><img src={this.props.avatar}/></div>
         <div>{this.props.user.first_name}</div>
         <div>{this.props.user.last_name}</div>
         <div>
            <button onClick={this.handleLog.bind(this)}>login</button>
         </div>
      </div>
      );
  }
}

export default Header;
