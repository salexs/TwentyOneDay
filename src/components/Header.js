import React, { Component } from 'react';


class Header extends Component {

  handleLog() {
    this.props.login();
  }

  render() {

    return (

      <div className='Header'>

        <div>
          <div className='Logo'>21 День</div>
        </div>

        <div>
          <button
           onClick={this.handleLog.bind(this)}>
           sign in with VK
          </button>
        </div>

        <div>
          <div>
          </div>
          <div>
            {this.props.user.user.domain}
          </div>
        </div>


      </div>
      );
  }
}

export default Header;
