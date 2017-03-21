import React, { Component } from 'react';


class Header extends Component {

  handleLog() {
    this.props.login();
    this.props.loadAvatar()
  }

  render() {

    return (

      <div className='Header_contentMain'>

        <div className='Header_welcomeText'>
          <div className='Header_TwentyOneDays'>21 day</div>
          <div className='Header_Slogan'>make yourself better !</div>
        </div>

        <div className='Header_userProfile'>
          <div className='Header_userMainPhoto'>
            <img src={this.props.avatar}/>
          </div>
          <div className='Header_userFullName'>
            {this.props.user.first_name}
            {this.props.user.last_name}
          </div>
        </div>

        <div className='Header_Registration'>
          <button className='Header_buttonLogIn'
           onClick={this.handleLog.bind(this)}>login
          </button>
        </div>

      </div>
      );
  }
}

export default Header;
