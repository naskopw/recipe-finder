
import { Link, useHistory } from "react-router-dom"
import { React, useEffect, useState } from 'react'
import './style.css'
import AuthService from "../../Services/AuthService"
export const LoggedNav = (props) => {
    const [staticNav, setStaticNav] = useState(false)
    
    const history = useHistory();

    const setNavClasses = () => { return staticNav ? "navbar navbar-default navbar-fixed-top on" : "navbar navbar-default navbar-fixed-top" }

    // useEffect(() => {
    //     if (!loggedIn)
    //         history.push("/")
    //     window.location.reload()
    // }, [])

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
                        <li><Link to='/tools/favorites'>Favorites</Link></li>
                        <li><Link to='/tools/calendar'>Calendar</Link></li>
                        <li><Link to='/tools/shopping'>Shopping List</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to="#" onClick={() => {
                            AuthService.logout()
                            history.push("/")
                            window.location.reload()
                        }}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
