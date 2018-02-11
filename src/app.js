import React, { Component } from 'react'
import Setup from './setup'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return <div>
      <Setup />
    </div>
  }
}

export default App
