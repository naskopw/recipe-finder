import { Link } from "react-router-dom"
import './style.css'

export const Footer = () => {
    return (

        <div id="footer">
            <div className="container-fluid text-center">
                <div className="col-md-8 col-md-offset-2">
                    <div className="social">
                        <ul>
                            <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                        </ul>
                    </div>
                    <p className="copyrights">&copy; 2021 RecipeFinder. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
