import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"
import { React, useEffect, useState } from 'react'
import './style.css'

export const Nav = (props) => {
    const [staticNav, setStaticNav] = useState(false)
    const setNavClasses = () => { return staticNav ? "navbar navbar-default navbar-fixed-top on" : "navbar navbar-default navbar-fixed-top" }
    useEffect(() => {
        if (props.isStatic)
            setStaticNav(true)
    }, [props.isStatic])

    return (
        <nav id="menu" className={setNavClasses()}>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span
                            className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    <Link className="navbar-brand page-scroll" to='/'>RecipeFinder</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><HashLink to='/#about'>About</HashLink></li>
                        <li><HashLink to='/#trending'>Trending</HashLink></li>
                        <li><Link to='/categories?startsWith=A'>Search</Link></li>
                        <li><HashLink to='/#team'>Chefs</HashLink></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
