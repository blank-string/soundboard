import React from 'react'
import Delete from './icons/delete'

const Suggestion = ({label, useSuggestion}) => <button className='button is-fullwidth' onClick={useSuggestion}>{label}</button>

const Suggestions = ({
  update,
  showAll,
  hideAll,
  suggestions = [],
  value = '',
  label,
  add
}) => <div style={{marginBottom: 10}}>
  <label className='label'>{label}</label>
  <div className={`field ${add ? 'has-addons' : ''}`}>

    <div className='control is-expanded'>
      <input
        id={`input-${label}`}
        className='input'
        type='text'
        onFocus={() => {
          if (value === '') showAll()
          else update(value)
        }}
        onKeyDown={evt => {
          if (evt.key === 'Enter' || evt.key === 'Escape') {
            hideAll()
            document.getElementById(`input-${label}`).blur()
          }
        }}
        onChange={(evt) => {
          update(evt.target.value)
          if (evt.target.value === '') showAll()
        }}
        value={value}
        placeholder={label} />
      <div>{suggestions.map(value => <Suggestion
        key={value}
        label={value}
        useSuggestion={() => {
          update(value)
          hideAll()
        }}
      />)}
      </div>
      {suggestions.length > 0 ? <button onClick={hideAll} className='button is-fullwidth is-info'>
        <span className='icon'><Delete /></span>
        <span>Close Suggestions</span>
      </button> : null}
    </div>
    {add ? <div className='control'>
      <a className='button is-info' onClick={() => {
        add(value)
        hideAll()
      }}>Add</a>
    </div>
      : null }
  </div>
</div>

Suggestions.propTypes = {
}

export default Suggestions
