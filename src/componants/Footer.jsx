import React from "react";

let currentYear = new Date().getFullYear();

function Footer(params) {
    return (
        <footer>
        <p>Copyright &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;