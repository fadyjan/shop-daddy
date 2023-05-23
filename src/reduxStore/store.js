import { configureStore } from '@reduxjs/toolkit';
import { createSlice, combineReducers} from '@reduxjs/toolkit';
import axios from "axios";

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const { setProducts } = productsSlice.actions;

const skipSlice = createSlice({
    name: 'skip',
    initialState: 0,
    reducers: {
      setSkip: (state, action) => action.payload,
    },
  });

  export const fetchProducts = (skip) => async (dispatch) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/?skip=${skip}&limit=8`);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  export const goToNextPage = () => (dispatch, getState) => {
    const skip = getState().skip + 8;
    dispatch(setSkip(skip));
    dispatch(fetchProducts(skip));
  };
  
  export const goToPreviousPage = () => (dispatch, getState) => {
    const skip = Math.max(0, getState().skip - 8);
    dispatch(setSkip(skip));
    dispatch(fetchProducts(skip));
  };
  
  export const { setSkip } = skipSlice.actions;

  const rootReducer = combineReducers({
    products: productsSlice.reducer,
    skip: skipSlice.reducer,
  });
  
  export default configureStore({
    reducer: rootReducer,
  });