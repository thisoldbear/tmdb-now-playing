import { combineResultAndGenres } from './'

describe('Context', () => {
  describe('combineResultAndGenres()', () => {
    it('should combine result data and genre data', () => {
      const genreData = [
        { id: 18, name: 'Drama' },
        { id: 35, name: 'Comedy' },
        { id: 10752, name: 'War' },
      ]

      const resultData = [
        {
          title: 'Dr Strangelove',
          genre_ids: [18, 35, 10752],
        },
        {
          title: 'Full Metal Jacket',
          genre_ids: [18, 10752],
        },
      ]

      const expectedResult = [
        {
          title: 'Dr Strangelove',
          genre_ids: [18, 35, 10752],
          genres: [
            { id: 18, name: 'Drama' },
            { id: 35, name: 'Comedy' },
            { id: 10752, name: 'War' },
          ],
        },
        {
          title: 'Full Metal Jacket',
          genre_ids: [18, 10752],
          genres: [{ id: 18, name: 'Drama' }, { id: 10752, name: 'War' }],
        },
      ]

      const combinedData = combineResultAndGenres(resultData, genreData)

      expect(combinedData).toEqual(expectedResult)
    })
  })
})
