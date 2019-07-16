import React, { useContext } from 'react'

import { Context } from '../../context'

import Listing from '../listing'
import InputSelect from '../input-select'

export const sortHighToLow = (a, b, value) =>
  a[value] > b[value] ? -1 : a[value] < b[value] ? 1 : 0

export const sortLowToHigh = (a, b, value) =>
  a[value] < b[value] ? -1 : a[value] > b[value] ? 1 : 0

const Listings = () => {
  const { results, sortOrder, setSortOrder } = useContext(Context)

  return (
    <div>
      <label>Order by rating:</label>
      <InputSelect
        value={{
          value: 'high-to-low',
          label: 'High to Low',
        }}
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
        handleChange={({value}) => {
          setSortOrder(value)
        }}
      />

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
            />
          ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default Listings
