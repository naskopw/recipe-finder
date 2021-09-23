import {React} from 'react'
import {Link} from 'react-router-dom'
import "./style.css"
import {HashLink} from "react-router-hash-link";
import AuthService from "../../Services/AuthService";

const Nav = () => {
    const renderLoginOrTools = () => {
        if (AuthService.isLoggedIn())
            return <li><Link to="/tools/shopping" className="nav-link">Tools</Link></li>
        return <li><Link to="/login" className="nav-link">Login</Link></li>
    }

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
                        <li><HashLink to="/#section-about" className="nav-link">About</HashLink></li>
                        <li><HashLink to="/#section-trending" className="nav-link">Trending</HashLink></li>
                        <li><Link to="/categories" className="nav-link">Search</Link></li>
                        <li><HashLink to="#section-chefs" className="nav-link">Chefs</HashLink></li>
                        {renderLoginOrTools()}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Nav
