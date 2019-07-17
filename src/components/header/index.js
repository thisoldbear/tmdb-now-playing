import React, { useContext } from 'react'
import classnames from 'classnames/bind'

import { Context } from '../../context'
import InputSelect from '../input-select'
import Logo from '../logo'

import css from './styles.module.scss'
const styles = classnames.bind(css)

const Heading = ({ children }) => {
  const { setSortOrder } = useContext(Context)

  return (
    <div className={styles('header')}>
      <div className={styles('header__inner')}>
        <Logo />
        <InputSelect
          label={'Order by rating'}
          options={[
            {
              value: 'high-to-low',
              label: 'High to Low',
            },
            {
              value: 'low-to-high',
              label: 'Low to High',
            },
          ]}
          handleChange={({ value }) => {
            setSortOrder(value)
          }}
        />
      </div>
    </div>
  )
}

export default Heading
