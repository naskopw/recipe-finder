import { React } from 'react'
import "./style.css"

import Nav  from '../NavMain/Nav'
import Discover from "./Discover/Discover";
// import { Trending } from '../Components/Trending/Trending'
// import { About } from '../Components/About/About'
// import { Chefs } from '../Components/Chefs/Chefs'
// import { Footer } from '../Components/Footer/Footer'
export const Home = () => {
    return (
        <div>
            <Nav/>
            <Discover/>
            {/*<About></About>*/}
            {/*<Trending></Trending>*/}
            {/*<Chefs></Chefs>*/}
            {/*<Footer></Footer>*/}
        </div>
    )
}
