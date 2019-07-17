import React from 'react'
import classnames from 'classnames/bind'

import css from './styles.module.scss'
const styles = classnames.bind(css)

const Logo = () => {
  return (
    <div className={styles('logo')}>
      <span className={styles('logo__text')}>
        <span className={styles('logo__text-highlight')}>TMDB</span> Now Playing
      </span>
      <span className={styles('logo__symbol')} />
    </div>
  )
}

export default Logo
