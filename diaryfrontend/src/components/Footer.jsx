import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="flex justify-center items-end w-full bg-slate-400">
        <p>
            Copyright © {currentYear}
        </p>
        </div>
    )
}

export default Footer;