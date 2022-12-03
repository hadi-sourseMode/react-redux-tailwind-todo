import { ADD_ITEM, DELETE_ITEM, CHANGE_FILTER, TOGGLE_ITEM, DELETE_COMPLETED } from "./actionTypes";

let nextID = 1;

const addItem = (value) => {
    return {
        type: ADD_ITEM,
        nextId: nextID++,
        value: value,
    };
};



const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id: id
    };
};


const toggleItem = (id) => {
    return {
        type: TOGGLE_ITEM,
        id: id
    };
};


const changeFilter = (status) => {
    return {
        type: CHANGE_FILTER,
        status: status
    };
};


const deleteCompleted = () => {
    return {
        type: DELETE_COMPLETED,
    };
};

export { addItem, deleteItem, changeFilter, toggleItem, deleteCompleted };