import React from "react";
import HeroSection from "../../HeroSection";
import Footer from "../Footer/Footer";
import Pricing from "../PricingPage/Pricing.js";
import { homeObjOne } from "./Data";

const Services = () => {
    return(
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </>

    )
}

export default Services;