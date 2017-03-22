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
        </div>

        <div className={'Header_Registration'+this.props.user.loginStyle}>
          <button className='Header_buttonLogIn'
           onClick={this.handleLog.bind(this)}>
           sign in with VK
          </button>
        </div>

        <div className='Header_userProfile'>
          <div className='Header_userMainPhoto'>
            <img  id='avatar' src={this.props.avatar}/>
          </div>
          <div className='Header_userFullName'>
            {this.props.user.user.domain}
          </div>
        </div>


      </div>
      );
  }
}

export default Header;
