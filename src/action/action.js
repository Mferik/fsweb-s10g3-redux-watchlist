export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";

export const addFav = (id) => {
  return {
    type: ADD_FAV,
    payload: id,
  };
};

export const deleteFav = (id) => {
  return {
    type: DELETE_FAV,
    payload: id,
  };
};
