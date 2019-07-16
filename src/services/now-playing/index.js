import { API_URL_NOW_PLAYING } from "../../consts";


export const getNowPlaying = async () => {
  return await fetch(
    `${API_URL_NOW_PLAYING}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  )
    .then((response) => response.json())
    .then(({ results }) => results)
    .catch((err) => {
      console.error('fetch failed', err)
    })
}
