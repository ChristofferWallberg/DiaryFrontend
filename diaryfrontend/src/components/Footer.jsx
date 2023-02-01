import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div class="flex justify-center items-end w-full">
        <p>
            Copyright © {currentYear}
        </p>
        </div>
    )
}

export default Footer;