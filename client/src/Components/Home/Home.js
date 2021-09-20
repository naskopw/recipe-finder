import {React} from 'react'
import "./style.css"

import Nav from '../NavMain/Nav'
import Discover from "./Discover/Discover";
import About from "./About/About";
import Footer from "./Footer/Footer";

export const Home = () => {
    return (
        <div>
            <Nav/>
            <Discover/>
            <About/>
            {/*<Trending></Trending>*/}
            {/*<Chefs></Chefs>*/}
            <Footer/>
        </div>
    )
}
