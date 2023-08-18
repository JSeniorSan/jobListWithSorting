import { ADD_FILTER_VALUE } from "./filter-constants";
import { REMOVE_VALUE } from "./filter-constants";
import { REMOVE_ALL } from "./filter-constants";

export const addFilterAction = (value) => ({
  type: ADD_FILTER_VALUE,
  value,
});

export const removeAll = {
  type: REMOVE_ALL,
};

export const removeValue = (value) => ({
  type: REMOVE_VALUE,
  value,
});
