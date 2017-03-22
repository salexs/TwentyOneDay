import React, { Component } from 'react';


class Aims extends Component {

  showHabits(el) {
    this.props.showHabit(el.id)
  }

  render() {

    return (
        <div className='Aims_contentMain'>
          <div className='Aims_statistic'>
            <strong>Цели: {this.props.aims.length}</strong>
          </div>

          <ul className='Aims_allCreatedAims'>
            {this.props.aims.map( (el,index) =>
              <li key={index}>
                <div className='Aims_newAim'>

                  <div className='Aims_aimAction'>
                    <button className='Aims_aimEdit'>&#9998;</button>
                    <button className='Aims_aimDelete'>&#215;</button>
                  </div>

                  <div className='Aims_aimText'
                    onClick={this.showHabits.bind(this, el)}>
                    {el.aim}
                  </div>

                </div>
              </li>
            )}
          </ul>

        </div>

    );
  }
}

export default Aims;
