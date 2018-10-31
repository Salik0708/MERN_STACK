import axios from 'axios';

//GET_ITEMS
export const getItems = () => {
  return (dispatch) => {
    dispatch(setItemsLoading());
    axios.get('/api/items').then((res) => dispatch({
      type: "GET_ITEMS",
      data: res.data
    }));
  };
};

//ADD_ITEM
export const addItem = (name) => {
  return (dispatch) => {
    axios.post('/api/items', { name }).then((res) => dispatch({
      type: "ADD_ITEM",
      item: res.data
    }));
  };
};

//REMOVE_ITEM
export const removeItem = ({ id }) => {
  return (dispatch) => {
    axios.delete(`/api/items/${id}`).then((res) => dispatch({
      type: "REMOVE_ITEM",
      id
    }));
  };
}; 

//ITEMS_LOADING
export const setItemsLoading = () => ({
  type: "ITEMS_LOADING"
});