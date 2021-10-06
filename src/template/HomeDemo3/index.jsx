import {
          OurMainContent,
          FeaturesContent,
          PlatformContent,
          ServicesBlockInfo,
          OurService
       } from '../../data/data-containers/data-HomeDemo3.js';

import {
        HomeDemo3About11,
        HomeDemo3About12,
        HomeDemo3Dotted1
        } from '../../utils/allImgs'

import './style/HomeDemo3.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from './SecHeroSection'
import SecOurMain from './SecOurMain'
import SecOurFeatures from './SecOurFeatures'
import SecPaymentPlatform from './SecPaymentPlatform'
import SecHowITWorks from './SecHowITWorks'
import SecOurService from './SecOurService'

const HomeDemo3 = () => {

    return (
      <div>
        <Header Title="Home Template3" />
        <SecHeroSection />
        <div className="clearfix" />
        <SecOurMain data={OurMainContent} />
        <div className="clearfix" />
        <SecPaymentPlatform data={PlatformContent} img1={HomeDemo3About11} img2={HomeDemo3About12} img3={HomeDemo3Dotted1} />
        <SecOurFeatures data={FeaturesContent} />
        <SecHowITWorks ServicesBlockInfo={ServicesBlockInfo} />
        <SecOurService data={OurService} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo3