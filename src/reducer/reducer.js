import { movies } from "../movies";
import { ADD_FAV, DELETE_FAV } from "../action/action";

const initialState = {
  favMovies: [],
  movies: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const movieToAdd = state.movies[action.payload];
      const isAlreadyFavorited = state.favMovies.some(
        (movie) => movie.id === movieToAdd.id
      );
      return isAlreadyFavorited
        ? state
        : { ...state, favMovies: [...state.favMovies, movieToAdd] };
    case DELETE_FAV:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
