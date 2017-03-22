import React, { Component } from 'react';

class HabitCreate extends Component {
  
  handleSubmit() {
    if (this.HabitInput.value!=='' && this.props.clickedHabit!=='') {
      this.props.onAddHabit( this.props.clickedHabit, this.HabitInput.value );
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
      <div>
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

export default HabitCreate;
