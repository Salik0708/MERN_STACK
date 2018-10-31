//Items Reducer
const itemsReducerDefaultState = {
  items: [],
  loading: false
};

const itemsReducer = (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.data,
        loading: false
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== action.id)
      };
    case 'ITEMS_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default itemsReducer;