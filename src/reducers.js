import clone from 'clone'
import manager from './manager/reducer'
import soundboard from './soundboard/reducer'
import header from './header/reducer'

export default {
  soundboard: (state = {}, action) => soundboard(clone(state), action),
  manager: (state = {}, action) => manager(clone(state), action),
  header: (state = {}, action) => header(clone(state), action)
}
