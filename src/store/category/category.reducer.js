import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
const categoryInitialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState: categoryInitialState,
  reducers: {
    setCategoriesSuccess(state, action) {
      state.categories = action.payload;
      state.isLoading = false;
    },
    setCategoriesPending(state, action) {
      state.isLoading = true;
    },
    setCategoriesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(categoryActions.setCategoriesPending());
    try {
      let categoriesArray = await getCategoriesAndDocuments("categories");

      dispatch(categoryActions.setCategoriesSuccess(categoriesArray));
    } catch (err) {
      dispatch(
        categoryActions.setCategoriesFailure(err.message ? err.message : err)
      );
    }
  };
};
