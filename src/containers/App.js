import React, { Component } from 'react'


import Aims from '../components/Aims'

class App extends Component {

  render() {

    return (

      <div>
        <Aims id={this.props.id}/>
      </div>

    );
  }
}



export default App
