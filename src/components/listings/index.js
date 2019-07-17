import React, { useContext } from 'react'
import classnames from 'classnames/bind'

import { Context } from '../../context'
import Listing from '../listing'

import css from './styles.module.scss'
const styles = classnames.bind(css)

export const sortHighToLow = (a, b, value) =>
  a[value] > b[value] ? -1 : a[value] < b[value] ? 1 : 0

export const sortLowToHigh = (a, b, value) =>
  a[value] < b[value] ? -1 : a[value] > b[value] ? 1 : 0

const Listings = () => {
  const { results, sortOrder } = useContext(Context)

  return (
    <div className={styles('listings')}>
      {results ? (
        results
          .sort((a, b) =>
            sortOrder === 'high-to-low'
              ? sortHighToLow(a, b, 'vote_average')
              : sortLowToHigh(a, b, 'vote_average'),
          )
          .map((listing) => (
            <Listing
              key={listing.id}
              title={listing.title}
              genres={listing.genres}
              posterPath={listing.poster_path}
              voteAverage={listing.vote_average}
              className={styles('listings__item')}
            />
          ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default Listings
