import React from "react";

const SingleTodo = () => {
    return (
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-10">
                <div className="flex items-center">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"/>
                </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap w-full">
                Jone Doe
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a
                    className="text-red-500 hover:text-red-700"
                    href="#"
                >
                    X
                </a>
            </td>
        </tr>

    );
}

export default SingleTodo;
