import { useState } from 'react';
import React from "react";

const AddTodo = () => {

    const [text, setText] = useState("");

    const addItemToDo = (e) => {
        e.preventDefault()

        // if (text)
            // addItem(text)
    }
    return (
        <header className="w-full px-6 py-6 bg-[#8c7d76]">
            <h1 className="text-3xl text-center font-bold text-white">To Do list</h1>

            <form onSubmit={addItemToDo} className="flex mt-10">
                <input onChange={event => setText(event.target.value)} className="w-full h-10 placeholder-gray-200::placeholder px-2" placeholder="Title ..." type="text" />
                <button type="submit" className="text-white p-1 w-3/12 h-10 bg-gray-400 " >Submit</button>
            </form>
        </header>
    );
}

export default  AddTodo;