import React from "react";

const Footer = () => {
    return (
        <footer className="flex px-3 border border-gray-300 items-center bg-gray-200 justify-between">
            <div className="flex gap-1 text-xs">
                <span>0</span>
                <span>item left</span>
            </div>

            <div className="flex gap-3">
                <button className="bg-transparent focus:outline-none text-xs">All</button>
                <button className="bg-transparent focus:outline-none text-xs">Active</button>
            </div>

            <div className="">
                <button className="border border-gray-400 px-3 text-xs">Clear completed</button>
            </div>

            
        </footer>
    );
}

export default Footer;
