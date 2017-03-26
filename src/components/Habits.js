import React, { Component } from 'react';



class Habits extends Component {

  showModal() {
      this.props.openModal();
  }

  render() {

    return (

      <div className='Habits_contentMain'>

        <div className='Habits_statistic'>
          <strong>Привычки: {this.props.habits.length}</strong>

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
                  <div className='Load'>
                    {el.text}
                  </div>
                </div>

              </div>
            </li>
          )}
        </ul>
        <span className='showModal' onClick = {this.showModal.bind(this)}>+</span>
      </div>
    );
  }
}

export default Habits;
