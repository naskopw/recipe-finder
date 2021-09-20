import {React} from 'react'
import {Link} from 'react-router-dom'
import "./style.css"
import {HashLink} from "react-router-hash-link";

const Nav = () => {
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark">
                <Link to="#" className="navbar-brand">RecipeFinder</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav text-center ms-auto">
                        <li><HashLink to="#section-about" className="nav-link">About</HashLink></li>
                        <li><Link to="#" className="nav-link">Trending</Link></li>
                        <li><Link to="#" className="nav-link">Search</Link></li>
                        <li><HashLink to="#section-chefs" className="nav-link">Chefs</HashLink></li>
                        <li><Link to="#" className="nav-link">Register</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Nav
