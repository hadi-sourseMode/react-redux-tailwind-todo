import SingleTodo from "../nested/SingleTodo";
import React from "react";




const ToDoList = () => {
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
                                {/* {todoItems.map((c) => (
                                    <SingleTodo />
                                    ))} */}

<SingleTodo />
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
