import React from 'react'
import styles from './styles'

const Tabs = ({tabs, toggle}) => <div className={`tabs is-toggle is-small ${styles.tabs()}`}>
  <ul>
    {tabs.map(({label, active}) => <li key={label} className={`is-${active}`}>
      <a onClick={() => toggle(label)}>
        <span>{label}</span>
      </a>
    </li>
    )}
  </ul>
</div>

export default Tabs
