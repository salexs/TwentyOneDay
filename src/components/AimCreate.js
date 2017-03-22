import React, { Component } from 'react';

class AimCreat extends Component {

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

  render() {
    return (
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

    )
  }
}

export default AimCreat;
