import React from 'react'
import classnames from 'classnames/bind'

import { API_URL_IMAGE } from '../../consts'

import css from './styles.module.scss'
const styles = classnames.bind(css)

const Listing = ({ title, genres, posterPath, voteAverage, className }) => {
  return (
    <div className={styles('listing', className)}>
      <div className={styles('listing__details')}>
        <h2 className={styles('listing__title')}>{title}</h2>
        <div className={styles('listing__genres')}>
          {genres.map((genre) => (
            <span className={styles('listing__genre')} key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles('listing__img-container')}>
        <img
          className={styles('listing__img')}
          src={`${API_URL_IMAGE}${posterPath}`}
          alt={`Poster for ${title}`}
        />
      </div>
      <div className={styles('listing__vote-average')}>
        <span className={styles('listing__vote-average-text')}>
          {Number(voteAverage).toFixed(1)}
        </span>
      </div>
    </div>
  )
}

export default Listing
