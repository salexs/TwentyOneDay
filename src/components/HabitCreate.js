import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as habitActions from '../actions/HabbitActions';

class HabitCreate extends Component {

  handleSubmit() {
    if (this.HabitInput.value!=='') {
      this.props.habitActions.onAddHabit( this.props.clickedHabit, this.HabitInput.value );
      this.HabitInput.value='';
    }
  }

  handleKeyPress(target) {
    if(target.charCode==13){
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className='HabitCreate'>
        <input className='Habits_inputTextHabit'
          type='text'
          placeholder='введите привычку'
          ref={(input) => { this.HabitInput = input }}
          onKeyPress = { this.handleKeyPress.bind(this) }
        />
        <br/>
        <button className='Habits_addHabit'
          onClick={ this.handleSubmit.bind(this) }>
          Добавить привычку
        </button>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    clickedHabit: state.showHabit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    habitActions: bindActionCreators(habitActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HabitCreate)
