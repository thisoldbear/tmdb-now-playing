import { API_URL_GENRE } from "../../consts";

export const getGenres = async () => {
  return await fetch(
    `${API_URL_GENRE}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then(response => response.json())
    .then(({ genres }) => genres)
    .catch(err => {
      console.error("fetch failed", err);
    });
};
