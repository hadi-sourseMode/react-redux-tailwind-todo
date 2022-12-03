import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "./actionTypes";

const initialState = [];

const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        { id: action.nextId, text: action.value, completed: false }
    ];

    case GET_ITEMS:
        return state;

    case DELETE_ITEM:
      return state.filter((item)=>item.id !== action.id);

    default:
      return state;
  }
};


export default MyReducer;