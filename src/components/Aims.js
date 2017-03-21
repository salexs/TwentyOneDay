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

  handleKeyPress(target) {
    if(target.charCode==13) {
      this.handleSubmit();
    }
  }

  loging() {
    this.props.login()
  }

  render() {

    return (

        <div className='Aims_contentMain'>

          <div className='Aims_statistic'>
            <strong>Цели</strong> (количество = {this.props.aims.length})
          </div>

          <div>
            <input className='Aims_inputTextAim'
              type='text'
              placeholder='введите цель'
              ref={(input) => { this.AimInput = input }}
              onKeyPress = { this.handleKeyPress.bind(this) }
            />
            <br/>
            <button className='Aims_addAim'
              onClick={ this.handleSubmit.bind(this) }>
              Добавить цель
            </button>
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
