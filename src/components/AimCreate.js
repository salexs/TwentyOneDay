import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as aimActions from '../actions/AimActions';
import Priming from './Priming'

class AimCreate extends Component {

  handleSubmit() {
    if (this.AimInput.value!=='') {
      this.props.aimActions.onAddAim(this.AimInput.value);
      this.AimInput.value='';
    }
  }

  handleKeyPress(target) {
    if(target.charCode==13) {
      this.handleSubmit();
    }
  }

  handlePriming(event) {
    this.props.aimActions.showPriming(event);
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Введите цель'
          ref={(input) => { this.AimInput = input }}
          onKeyPress = { this.handleKeyPress.bind(this) }
          onChange = {this.handlePriming.bind(this)}
          value={this.props.priming.choise}
        />
        <button
          onClick={ this.handleSubmit.bind(this) }>
          Добавить цель
        </button>
        <Priming
          priming={this.props.priming}
          choiseWord={this.props.aimActions.choiseWord}
        />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    priming:state.priming
  }
}

function mapDispatchToProps(dispatch) {
  return {
    aimActions: bindActionCreators(aimActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AimCreate)
