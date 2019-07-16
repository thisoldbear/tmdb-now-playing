import { sortHighToLow, sortLowToHigh } from './'

describe('Listings', () => {
  describe('sortHighToLow', () => {
    it('should sort results by lowest vote average first', () => {
      const resultData = [
        {
          title: 'The Shining',
          vote_average: 8.2,
        },
        {
          title: 'Full Metal Jacket',
          vote_average: 8.0,
        },
        {
          title: 'Dr Strangelove',
          vote_average: 8.5,
        },
      ]

      const sortedHighToLow = resultData.sort((a, b) =>
        sortHighToLow(a, b, 'vote_average'),
      )

      const expectedOrder = [
        {
          title: 'Dr Strangelove',
          vote_average: 8.5,
        },
        {
          title: 'The Shining',
          vote_average: 8.2,
        },
        {
          title: 'Full Metal Jacket',
          vote_average: 8.0,
        },
      ]

      expect(sortedHighToLow).toEqual(expectedOrder)
    })
  })

  describe('sortLowToHigh', () => {
    it('should sort results with lowest vote average first', () => {
      const resultData = [
        {
          title: 'The Shining',
          vote_average: 8.2,
        },
        {
          title: 'Full Metal Jacket',
          vote_average: 8.0,
        },
        {
          title: 'Dr Strangelove',
          vote_average: 8.5,
        },
      ]

      const sortedLowToHigh = resultData.sort((a, b) =>
        sortLowToHigh(a, b, 'vote_average'),
      )

      const expectedOrder = [
        {
          title: 'Full Metal Jacket',
          vote_average: 8.0,
        },
        {
          title: 'The Shining',
          vote_average: 8.2,
        },
        {
          title: 'Dr Strangelove',
          vote_average: 8.5,
        },
      ]

      expect(sortedLowToHigh).toEqual(expectedOrder)
    })
  })
})
