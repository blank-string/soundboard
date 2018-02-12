import {connect} from 'react-redux'
import reducer from '../default-reducer'
import actions from './actions'
import Component from './header'

export default connect(reducer('header'), actions)(Component)
