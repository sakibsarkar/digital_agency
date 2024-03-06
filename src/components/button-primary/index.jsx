import React from "react";

const ButtonPrimary = ({ bgColor = "#8EADD5", children }) => {
    return (
        <button className="btn-primary" style={{ background: bgColor }}>{children}</button>
    );
};

export default ButtonPrimary;