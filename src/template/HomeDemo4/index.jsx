import {
          ServicesContent,
          WhoWeHafe1,
          WhoWeHafe2,
          FeaturesContent,
          PlatformContent,
          OurService
       } from '../../data/data-containers/data-HomeDemo4.js';

import {
        HomeDemo4About11,
        HomeDemo4About12,
        HomeDemo4Dotted1,
        HomeDemo4coreImgMap,
        HeaderHeaderIll,
        AboutCoreImgAppo
        } from '../../utils/allImgs'

import './style/HomeDemo4.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from './SecHeroSection'
import SecAboutUs from './SecAboutUs'
import SecOurFeatures from './SecOurFeatures'
import SecPaymentPlatform from './SecPaymentPlatform'
import WhoWeContant from './WhoWeContant'
import SecOurService from './SecOurService'

const HomeDemo4 = () => {

    return (
      <div>
        <Header Title="Home Template4" />
        <SecHeroSection img={HeaderHeaderIll} />
        <div className="clearfix" />
        <SecOurFeatures data={FeaturesContent} />
        <SecAboutUs
          firstClass="about-us-area section-padding-0-70 clearfix"
          data={ServicesContent}
          img={AboutCoreImgAppo}
        />
        <SecPaymentPlatform data={PlatformContent} img1={HomeDemo4About11} img2={HomeDemo4About12} img3={HomeDemo4Dotted1} />        
        <WhoWeContant img={HomeDemo4coreImgMap} WhoWeHafe1={WhoWeHafe1} WhoWeHafe2={WhoWeHafe2} />
        <SecOurService data={OurService} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo4