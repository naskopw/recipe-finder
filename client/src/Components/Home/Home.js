import {React} from 'react'

import Nav from '../NavMain/Nav'
import Discover from "./Discover/Discover";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Chefs from "./Chefs/Chefs";
import Trending from "./Trending/Trending";

export const Home = () => {
    return (
        <div>
            <Nav/>
            <Discover/>
            <About/>
            <Trending/>
            <Chefs/>
            <Footer/>
        </div>
    )
}
