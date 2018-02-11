import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import sounds from './sounds.json'
import '@blank-string/components'

ReactDOM.render(<App sounds={sounds} />, document.getElementById('root'))
