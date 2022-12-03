import React from "react";
import { useDispatch } from "react-redux";
import { deleteCompleted } from "../../redux/actions";

const ClearCompleted = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => { dispatch(deleteCompleted()) }} className="border border-gray-400 px-3 text-xs">Clear completed</button>
        </div>

    );
}

export default ClearCompleted;

