import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, toggleItem } from "../../redux/actions";

const SingleTodo = ({ id, text, completed }) => {
    const dispatch = useDispatch();
    
    const deleteTodo = () => {
        dispatch(deleteItem(id));
    }

    const toggletodo = () => {
        dispatch(toggleItem(id));
    }


    return (
        <tr className={completed ? "bg-gray-500" : ""}>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-10">
                <div className="flex items-center">
                    <input id="link-checkbox" checked={completed} onChange={toggletodo} type="checkbox" value={completed} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                </div>
            </td>
            <td className={
                completed ?
                    "line-through px-6 py-4 text-sm text-white  whitespace-nowrap w-full"
                    : "px-6 py-4 text-sm text-gray-800 whitespace-nowrap w-full"
            }>
                {text}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <button
                    onClick={deleteTodo}
                    className="text-red-500 hover:text-red-700 focus:outline-none"

                >
                    x
                </button>
            </td>
        </tr>

    );
}

export default SingleTodo;
