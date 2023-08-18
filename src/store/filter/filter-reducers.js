import { ADD_FILTER_VALUE } from "./filter-constants";
import { REMOVE_VALUE } from "./filter-constants";
import { REMOVE_ALL } from "./filter-constants";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case REMOVE_ALL: {
      return [];
    }
    case REMOVE_VALUE: {
      return state.filter((item) => {
        return item !== action.value;
      });
    }

    case ADD_FILTER_VALUE: {
      return [...state, action.value];
    }
    default: {
      return state;
    }
  }
};
