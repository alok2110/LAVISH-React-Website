import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../PricingPage/Pricing.js";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
    return(
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>

    )
}

export default Home;