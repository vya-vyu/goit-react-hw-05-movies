import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '71607835e81913adcb88d2b7747ce54e';

export const getPopularMovies = async () => {
  const res = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.results;
};

export const getMovieByID = async id => {
  const res = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(res);
  return res.data;
};

export const getCastById = async id => {
  const res = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.cast;
};

export const getReviewsById = async id => {
  const res = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.results;
};

export const getSearchByName = async name => {
  const res = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query: name,
    },
  });
  console.log(res.data.results);
  return res.data.results;
};
