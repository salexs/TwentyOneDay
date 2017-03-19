import React, { Component } from 'react';

class Aims extends Component {

  showHabits(el) {
    this.props.showHabit(el.id)

  }

  handleSubmit() {
    if (this.AimInput.value!=='') {
      this.props.onAddAim(this.AimInput.value);
      this.AimInput.value='';
    }
  }
  loging() {
    this.props.login()  
  }
  render() {

    return (

        <div>
          <strong>Цели</strong> (количество = {this.props.aims.length})

          <div className='addAim'>
            <input
              type='text'
              placeholder='введите цель'
              ref={(input) => { this.AimInput = input }}
            />
            <br/>
            <button onClick={ this.handleSubmit.bind(this) }>
              Добавить цель
            </button>
          </div>

          <ul className='allAims'>
            {this.props.aims.map( (el,index) =>
              <li key={index}>
                <div className='newAim'>

                  <button className='aimDelete'>
                    [x]
                  </button>

                  <br/>

                  <div className='aimText'
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
