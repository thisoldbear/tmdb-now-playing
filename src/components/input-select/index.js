import React from 'react'
import Select from 'react-select'
import classnames from 'classnames/bind'
import reactSelectStyles from './react-select-styles'

import css from './styles.module.scss'
const styles = classnames.bind(css)

const InputSelect = ({ label, options, handleChange }) => (
  <div className={styles('input-select')}>
    <label className={styles('input-select__label')}>{label}</label>
    <Select options={options} onChange={handleChange} styles={reactSelectStyles()}/>
  </div>
)

export default InputSelect
