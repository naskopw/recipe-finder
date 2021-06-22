import { React, useEffect, useState } from 'react'

import { Header } from '../Components/Header/Header'
import { Nav } from '../Components/Nav/Nav'
import { Trending } from '../Components/Trending/Trending'
import { About } from '../Components/About/About'
import { Chefs } from '../Components/Chefs/Chefs'
import { Footer } from '../Components/Footer/Footer'
export const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <About></About>
            <Trending></Trending>
            <Chefs></Chefs>
            <Footer></Footer>
        </div>
    )
}
