import React, { Component } from 'react';
import Soundboard from './soundboard'


class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Soundboard sounds={this.props.sounds} />
      </div>
    );
  }
}

export default App;
