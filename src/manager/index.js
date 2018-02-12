import {connect} from 'react-redux'
import reducer from '../default-reducer'
import actions from './actions'
import Component from './manager'

export default connect(reducer('manager'), actions)(Component)
