import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Featured from '../../Components/Featured Component/Featured'
import TrustedPartners from '../../Components/TrustedPartners/TrustedPartners'
import SliderSection from "../../Components/Slider/Slider";
import Best from '../../Components/BestPartSection/best';
import Categories from '../../Components/Categories/Categories';
import BuisnessSol from '../../Components/BuisnessSolutions/BuisnessSol';
import Reviews from '../../Components/Reviews/Reviews';
import LogoMaker from '../../Components/LogoMaker/LogoMaker';
import InspiringSection from '../../Components/InspiringWorkSection/InspiringSection';
import GuidesToHelp from '../../Components/GuidesToHelpSession/GuidesTohelp';
import AllDoable from '../../Components/AllDoableSection/AllDoable';

const Home = () => {
  return (
    <>
      <Featured />
      <TrustedPartners />
      <SliderSection />
      <Best />
      <Categories />
      <BuisnessSol />
      <Reviews />
      <LogoMaker />
      <InspiringSection />
      <GuidesToHelp />
      <AllDoable />
  
    </>
  );
}

export default Home