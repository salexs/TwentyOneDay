import React, { Component } from 'react';
import Habits from './Habits';

class Aim extends Component {
  active(el) {
    this.props.aimActions.active(el.id);
  }
  render () {
    return (
      <ul className='border'>
        {this.props.aims().map((el,index) =>
          <li key={index} style={{background:el.active ? 'rgb(180, 207, 233)':''}}>
            <div className='Aim' onClick={this.active.bind(this,el)}>
              <div className='Aim_Text'><span>{el.text}</span></div>
              <div className='Aim_Date'>
                <span>{el.date.time} </span>
                <span>{el.date.date}</span>
              </div>
              <div className='Aim_Habbits'>
                <span>{el.childIds.length}</span>
              </div>
            </div>
            <div className='Habits' style={{display:el.active ? '':'none'}}>
              <Habits aimID={el.id} />
            </div>

          </li>
        )}
      </ul>
    )
  }
}

export default Aim
