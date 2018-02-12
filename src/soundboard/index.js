import {connect} from 'react-redux'
import reducer from '../default-reducer'
import actions from './actions'
import Component from './soundboard'

export default connect(reducer('soundboard'), actions)(Component)
