import React from 'react'

import { API_URL_IMAGE } from '../../consts'

const Listing = ({ title, genres, posterPath, voteAverage }) => {
  return (
    <div>
      {title}
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
      {voteAverage * 10} %
      <img src={`${API_URL_IMAGE}${posterPath}`} alt={`Poster for ${title}`} />
    </div>
  )
}

export default Listing
