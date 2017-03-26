import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as aimActions from '../actions/AimActions';

class AimCreate extends Component {

  handleSubmit() {
    if (this.AimInput.value!=='') {
      this.props.aimActions.onAddAim(this.AimInput.value);
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
      <div className='AimCreate'>
      <p>Добавьте новую цель</p>
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


function mapStateToProps(state) {
  return {
    aims: state.aims
  }
}

function mapDispatchToProps(dispatch) {
  return {
    aimActions: bindActionCreators(aimActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AimCreate)
