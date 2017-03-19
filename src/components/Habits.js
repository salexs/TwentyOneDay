import React, { Component } from 'react';

class Habits extends Component {

  AddHabbit() {
    if (this.HabitInput.value!=='' && this.props.clickedHabit!=='') {
      this.props.onAddHabit( this.props.clickedHabit, this.HabitInput.value );
      this.HabitInput.value='';
    }
  }

  render() {

    return (

      <div>

        <strong>Привычки</strong> (количество = {this.props.habits.length})

        <div className='addHabit'>
          <input
            type='text'
            placeholder='введите привычку'
            ref={(input) => { this.HabitInput = input }}
          />
          <br/>
          <button onClick={this.AddHabbit.bind(this)}>
            Добавить привычку
          </button>
        </div>

        <ul>
          {this.props.habits.map( (el,index) =>
            <li key={el.id}>
              <div className='colorString' key={index}>{el.text}</div>
            </li>
          )}
        </ul>

      </div>
    );
  }
}

export default Habits;


// return (
//   <div>
//     <li key={this.props.habit.id}>
//       {this.props.habit.text}
//     </li>
//   </div>
// );
