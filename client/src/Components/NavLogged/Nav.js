import {React} from 'react'
import {Link} from 'react-router-dom'
import "../NavMain/style.css"

const Nav = () => {
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark">
                <Link to="/" className="navbar-brand">RecipeFinder</Link>
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
                        <li><Link to="/tools/calendar" className="nav-link">Calendar</Link></li>
                        <li><Link to="/tools/shopping" className="nav-link">shopping list</Link></li>
                        <li><Link to="/logout" className="nav-link">Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Nav
