const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;

export const fetchMovies = async (endpoint) => {
  const URL = `${baseURL}${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    console.log(data.results);

    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
