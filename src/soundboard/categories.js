import React from 'react'
import styles from './styles'

const Categories = ({categories, toggleCategory}) => <div className={`tabs is-toggle is-small ${styles.categories()}`}>
  <ul>
    {categories.map(({label, active}) => <li key={label} className={`is-${active}`}>
      <a onClick={() => toggleCategory(label)}>
        <span>{label}</span>
      </a>
    </li>
    )}
  </ul>
</div>

export default Categories
