import React, { Component } from 'react';


class Habits extends Component {

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

      <div className='Habits_contentMain'>

        <div className='Habits_statistic'>
          <strong>Привычки</strong> (количество = {this.props.habits.length})
        </div>

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

        <ul className='Habits_allCreatedHabits'>
          {this.props.habits.map( (el,index) =>
            <li key={index}>
              <div className='Habits_newHabit'>

                <div className='Habits_habitAction'>
                  <button className='Habits_habitEdit'>&#9998;</button>
                  <button className='Habits_habitDelete'>&#215;</button>
                </div>

                <div className='Habits_habitText'>
                  {el.text}
                </div>

                <div className='Habits_habitProgress'>
                  Progress
                </div>

              </div>
            </li>
          )}
        </ul>

      </div>
    );
  }
}

export default Habits;
