import axios from 'axios'; // axios 사용을 위해 import

const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => { // axios async ~ await 구분
  const { // ES6 문법
    data : {
      data : { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params : {
      limit, // limit : limit 과 same
      minimum_rating : rating
    }
  });

  // aysnc await구문에 의해 이 아래는 통신으로 값을 가져온 이후에 수행된다.

  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};

export let movieList = [
  {
    id : 0,
    title : "title00"
  },
  {
    id : 1,
    title : "title01"
  },
  {
    id : 2,
    title : "title02"
  },
];

export const deleteMovie = (id) => {
  const filteredMovies = movieList.filter(movie => movie.id === id);
  if(filteredMovies.length < movieList.length) {
    movieList = filteredMovies;
    return true;
  } else {
    return false;
  }
}