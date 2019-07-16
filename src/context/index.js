import React, { createContext, useState, useEffect } from 'react'

import { getGenres } from '../services/genres'
import { getNowPlaying } from '../services/now-playing'

export const combineResultAndGenres = (results, genres) =>
  results.map((result) => {
    const matchingGenre = result.genre_ids.map((genreId) => {
      const [matchingGenre] = genres.filter(({ id }) => id === genreId)
      return matchingGenre
    })

    return {
      ...result,
      genres: matchingGenre,
    }
  })

export const Context = createContext()

export default ({ children }) => {
  const [results, setResults] = useState([])

  const [genres, setGenres] = useState([])

  const [sortOrder, setSortOrder] = useState('high-to-low')

  /**
   * Make a request for all genres
   */
  useEffect(() => {
    const fetchData = async () => {
      await getGenres().then((genres) => {
        setGenres(genres)
      })
    }

    fetchData()
  }, [setGenres])

  /**
   * Make request for now playing movies
   */
  useEffect(() => {
    const fetchData = async () => {
      await getNowPlaying().then((results) => {
        setResults(combineResultAndGenres(results, genres))
      })
    }

    if (genres.length > 0) {
      fetchData()
    }
  }, [genres, setResults])

  return (
    <Context.Provider
      value={{
        results,
        setResults,
        genres,
        setGenres,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </Context.Provider>
  )
}
