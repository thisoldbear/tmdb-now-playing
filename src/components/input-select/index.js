import React from 'react'
import Select from 'react-select'

const InputSelect = ({ value, options, handleChange }) => (
  <div>
    <Select
      options={options}
      onChange={handleChange}
    />
  </div>
)

export default InputSelect
