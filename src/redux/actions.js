import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "./actionTypes";

let nextID = 0;

const addItem = (value) => {
    return {
        type: ADD_ITEM,
        nextId: nextID++,
        value: value,
    };
};


const getItems = () => {
    return {
        type: GET_ITEMS,
    };
};


const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id: id
    };
};

export { addItem, deleteItem, getItems };