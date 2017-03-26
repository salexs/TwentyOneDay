import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as habbitActions from '../actions/HabbitActions'
import * as aimActions from '../actions/AimActions'
import * as userActions from '../actions/UserActions'
import * as userPhotoActions from '../actions/UserPhotoActions'

import Aims from '../components/Aims'
import Habits from '../components/Habits'
import Header from '../components/Header'
import Modal from './Modal'


class App extends Component {

  render() {

    return (

      <div className='App_contentMain'>

        <div className='App_contentHeader'>
          <Header
            login = {this.props.userActions.handleLogin}
            user = {this.props.user}
            avatar = {this.props.avatar}
            loadAvatar = {this.props.photoActions.loadAvatar}
          />
        </div>
        <Modal
            status={this.props.modalAim}
            openModal= {this.props.aimActions.openModal}
            returnStatus = {this.props.aimActions.returnStatus}
         />
        <div className='App_contentAim'>
          <Aims
            aims={this.props.aims}
            showHabit={this.props.habbitActions.showHabit}
            openModal={this.props.aimActions.openModal}
          />
        </div>
        <div className='App_contentHabit'>
          <Habits
            habits={this.props.habits}
            openModal={this.props.habbitActions.openModal}
          />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aims: state.aims,
    habits: state.habits.filter((habit) => {
      if (habit.parentId===state.showHabit) {
        return habit;
      }else{return ''}
    }),
    clickedHabit: state.showHabit,
    user: state.user,
    avatar: state.avatar,
    modalAim: state.modalAim
  }
}

function mapDispatchToProps(dispatch) {
  return {
    habbitActions: bindActionCreators(habbitActions, dispatch),
    aimActions: bindActionCreators(aimActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    photoActions: bindActionCreators(userPhotoActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
