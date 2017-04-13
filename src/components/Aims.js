import React, { Component } from 'react';
import AimCreate from './AimCreate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as aimActions from '../actions/AimActions';
import * as userActions from '../actions/UserActions'
import Aim from './Aim'
import Header from './Header'

class Aims extends Component {

  render() {

    return (
        <div>
          <div>
            <Header
              login={this.props.userActions.handleLogin}
              user={this.props.user}
            />
          </div>
          <div className='Aims'>
              <Aim
                aims={this.props.aims}
                aimActions={this.props.aimActions}
              />
              <AimCreate />
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    aims: () => {
          let aims = [];
          for (let key in state.aims) {
            aims.push(state.aims[key])
          }
          return aims;
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    aimActions: bindActionCreators(aimActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Aims)
