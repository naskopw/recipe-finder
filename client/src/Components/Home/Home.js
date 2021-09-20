import {React} from 'react'
import "./style.css"

import Nav from '../NavMain/Nav'
import Discover from "./Discover/Discover";
import About from "./About/About";
// import { Trending } from '../Components/Trending/Trending'
// import { Chefs } from '../Components/Chefs/Chefs'
// import { Footer } from '../Components/Footer/Footer'
export const Home = () => {
    return (
        <div>
            <Nav/>
            <Discover/>
            <About/>
            {/*<Trending></Trending>*/}
            {/*<Chefs></Chefs>*/}
            {/*<Footer></Footer>*/}
        </div>
    )
}
