import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/actions";

const BTNsForAction = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return (
        <div className="flex gap-3">
            <button onClick={() => { dispatch(changeFilter(false)) }} className={state.isFilter ? "bg-transparent focus:outline-none text-xs" : "bg-transparent focus:outline-none text-gray-900 text-sm font-bold"}>All</button>
            <button onClick={() => { dispatch(changeFilter(true)) }} className={!state.isFilter ? "bg-transparent focus:outline-none text-xs" : "bg-transparent focus:outline-none text-gray-900 text-sm font-bold"}>Active</button>
        </div>

    );
}

export default BTNsForAction;


