import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="#social-media"><i className="fab fa-facebook"/></Link>
                    <Link to="#social-media"><i className="fab fa-instagram"/></Link>
                    <Link to="#social-media"><i className="fab fa-twitter"/></Link>
                </li>
            </ul>
            <p>2021 RecipeFinder. All rights reserved</p>
        </footer>
    );
};

export default Footer;