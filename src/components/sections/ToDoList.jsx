import SingleTodo from "../nested/SingleTodo";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";




const ToDoList = () => {
  const state = useSelector((state) => state);
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    if(state.isFilter){
        setTodos(state.items.filter((item)=> item.completed !== true));
    }else{
        setTodos(state.items);
    }
  },[state])
  
  return (
    <>
     <main className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="divide-y divide-gray-200">
                                <tr className="relative w-full">
                                    <td className=" px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                                        <span className="absolute left-0 top-0 p-1">
                                            what needs to be done ?
                                        </span>
                                    </td>
                                </tr>
                                {
                                   todos[0] ?
                                    todos.map((todo) => {
                                        return <SingleTodo key={todo.id}
                                                id={todo.id}
                                                text={todo.text}
                                                completed={todo.completed}
                                            />
                                        })
                                    :
                                    (
                                        <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-10">
                                            <div className="justify-center flex items-center">
                                              there is not data for show !
                                            </div>
                                        </td>
                                    </tr>
                                    ) }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>

      
    </>
  );
};
export default ToDoList;
