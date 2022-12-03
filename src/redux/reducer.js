import { ADD_ITEM, CHANGE_FILTER, DELETE_COMPLETED, DELETE_ITEM, TOGGLE_ITEM } from "./actionTypes";

const initialState = {
  items: [],
  isFilter: false,
  actives: []
};

const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          { id: action.nextId, text: action.value, completed: false }],
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      }

    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case CHANGE_FILTER:
      return {
        ...state,
        isFilter: action.status
      };

    case DELETE_COMPLETED:
      return {
        ...state,
        items: state.items.filter((item) => item.completed === false),
      };

    default:
      return state;
  }
};


export default MyReducer;