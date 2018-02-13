import clone from 'clone'
import sound from './sound/reducer'
import soundboard from './soundboard/reducer'
import header from './header/reducer'

export default {
  soundboard: (state = {}, action) => soundboard(clone(state), action),
  sound: (state = {}, action) => sound(clone(state), action),
  header: (state = {}, action) => header(clone(state), action)
}
