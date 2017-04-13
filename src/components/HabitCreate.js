import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as habitActions from '../actions/HabbitActions';

class HabitCreate extends Component {

  handleSubmit() {
    if (this.AimInput.value!=='') {
      this.props.habitActions.onAddHabit(this.AimInput.value,this.props.aimID);
      this.AimInput.value='';
    }
  }

  handleKeyPress(target) {
    if(target.charCode==13) {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className='HabitCreate'>
        <input
          type='text'
          placeholder='Введите цель'
          ref={(input) => { this.AimInput = input }}
          onKeyPress = { this.handleKeyPress.bind(this) }
        />
        <button
          onClick={ this.handleSubmit.bind(this) }>
          Добавить
        </button>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    aims: state.aims
  }
}

function mapDispatchToProps(dispatch) {
  return {
    habitActions: bindActionCreators(habitActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HabitCreate)
