const toggle = (tabs, tab) => tabs
  .map(({label, active}) => {
    if (tab === label) active = active === 'active' ? 'inactive' : 'active'
    return {
      label,
      active
    }
  })

const tabsLabels = tabs => tabs
  .filter(tab => tab.active === 'active')
  .map(tab => tab.label)

const createTabs = (tabs, get, noLabel) => {
  tabs = tabs || [{label: noLabel, active: 'active'}]
  const foundTabs = get().map(label => ({label, active: 'active'}))
  foundTabs.forEach(found => {
    if (!tabs.some(tab => tab.label === found.label)) tabs.push(found)
  })
  return tabs
}

export default (state, action) => {
  state.soundboard = state.soundboard || {sounds: []}

  state.soundboard.categories = createTabs(state.soundboard.categories, window.api.getCategories, 'No Category')
  state.soundboard.tags = createTabs(state.soundboard.tags, window.api.getTags, 'No Tags')

  if (action.type === '@@soundboard/TOGGLE_CATEGORY') {
    state.soundboard.categories = toggle(state.soundboard.categories, action.payload.category)
  }

  if (action.type === '@@soundboard/TOGGLE_TAG') {
    state.soundboard.tags = toggle(state.soundboard.tags, action.payload.tag)
  }

  const sounds = window.api.getSounds({
    name: '',
    categories: tabsLabels(state.soundboard.categories),
    tags: tabsLabels(state.soundboard.tags)
  })

  sounds.forEach((sound, i) => {
    if (process.env.NODE) sound.location = sound.location.replace(process.cwd(), '')
  })
  state.soundboard.sounds = sounds

  return state
}
