import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AimCreate from '../components/AimCreate';
import { Provider } from 'react-redux'
import {store} from '../index';
import HabitCreate from '../components/HabitCreate';



class Modal extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'openAimCreate') {return true;}
    if (nextProps.status === 'openHabbitCreate') {return true;}
    if (nextProps.status === 'close') {return true;}
    else {return false;}

  }
  componentWillUpdate(nextProps) {
    console.log('componentWillUpdate')
    if (nextProps.status === 'openAimCreate') {
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'modal'
      document.body.appendChild(this.modalTarget);
      this.aimCreateRender();
    }
    if (nextProps.status === 'openHabbitCreate') {
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'modal'
      document.body.appendChild(this.modalTarget);
      this.habbitCreateRender();
    }

    if (nextProps.status === 'close') {
      this.componentWillUnmount()
    }


  }
  componentWillUnmount() {
    console.log('componentWillUnmount()')
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
    this.props.returnStatus();
  }

  aimCreateRender() {
    ReactDOM.render(
      <Provider store={store}>
        <AimCreate />
      </Provider>,
      this.modalTarget
    )
  }

  habbitCreateRender() {
    ReactDOM.render(
      <Provider store={store}>
        <HabitCreate />
      </Provider>,
      this.modalTarget
    )
  }

  showModal() {
    this.props.openModal()
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}
export default Modal;
