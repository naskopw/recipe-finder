import { HashLink as Link } from 'react-router-hash-link';
import './style.css'

export const Nav = () => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span
                            className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    <Link className="navbar-brand page-scroll" to='/'>RecipeFinder</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to='/#about'>About</Link></li>
                        <li><Link to='/#trending'>Trending</Link></li>
                        <li><Link to='/#search'>Search</Link></li>
                        <li><Link to='/#team'>Chefs</Link></li>
                        <li><Link to='/'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
