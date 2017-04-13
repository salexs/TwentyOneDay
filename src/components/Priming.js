import React, { Component } from 'react';

class Priming extends Component {
  showli(el) {
    this.props.choiseWord(el)
  }
  render () {
    return (
      <div className='priming' style={{display:this.props.priming.active ? '':'none'}}>
        <ul>
          <div className='close_priming'><span>×</span></div>
          {this.props.priming.list.map((el,index) =>
            <li key={index}  onClick={this.showli.bind(this,el)}>{el}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Priming
