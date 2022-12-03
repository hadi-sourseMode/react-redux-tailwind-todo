import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ItemLeft = () => {
    const state = useSelector((state) => state);
    const [todos, setTodos] = useState([]);
 
    useEffect(() => {
        setTodos(state.items.filter((item) => item.completed !== true));
    }, [state])

    return (
        <div className="flex gap-1 text-xs">
            <span>{todos[0] ? todos.length : "0"}</span>
            <span>item left</span>
        </div>

    );
}

export default ItemLeft;
