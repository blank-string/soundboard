import {connect} from 'react-redux'
import reducer from '../default-reducer'
import actions from './actions'
import Component from './sound'

export default connect(reducer('sound'), actions)(Component)
