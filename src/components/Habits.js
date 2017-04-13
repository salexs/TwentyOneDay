import React, { Component } from 'react';
import { connect } from 'react-redux';
import HabitCreate from './HabitCreate';


class Habits extends Component {

  render() {
    return (
      <div className='Habits'>
        <ol className='bullet'>
          {this.props.habits.map((el,index) =>
            <li key={index}>
              <div className='Habit'>{el.text}</div>
              <div className='Load'>
                <div className='Load_Complited' style={{width:el.text+'em'}}></div>
              </div>
            </li>
          )}
        </ol>
        <HabitCreate aimID={this.props.aimID}/>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return {
    habits: state.habits.filter((habit) => {
      if (ownProps.aimID===habit.parentId) {
        return habit
      } else {return ''}
    })
  }
}

export default connect(mapStateToProps)(Habits)
