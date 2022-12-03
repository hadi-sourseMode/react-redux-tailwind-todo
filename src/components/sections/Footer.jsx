import React from "react";
import BTNsForAction from "../nested/BTNsForAction";
import ClearCompleted from "../nested/ClearCompleted";
import ItemLeft from "../nested/ItemLeft";

const Footer = () => {
    return (
        <footer className="flex px-3 border border-gray-300 items-center bg-gray-200 justify-between">
            <ItemLeft />
            <BTNsForAction />
            <ClearCompleted />
        </footer>
    );
}

export default Footer;
