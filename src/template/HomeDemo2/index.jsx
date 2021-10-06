import {
          ServiceLeftBox,
          ServiceRightBox,
          FeaturesContent,
          PlatformContent,
          WhoWeHafe1,
          WhoWeHafe2,
          OurService,
       } from '../../data/data-containers/data-HomeDemo2.js';

import {
        HomeDemo2About11,
        HomeDemo2About12,
        HomeDemo2Dotted1,
        HomeDemo2coreImgMap,
        } from '../../utils/allImgs'

import './style/HomeDemo2.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from './SecHeroSection'
import SecOurMain from './SecOurMain'
import SecOurFeatures from './SecOurFeatures'
import SecPaymentPlatform from './SecPaymentPlatform'
import WhoWeContant from './WhoWeContant'
import SecOurService from './SecOurService'

let HomeDemo2 = () => {

    return (
      <div>
        <Header Title="Home Template2" />
        <SecHeroSection />
        <div className="clearfix" />
        {/*<SecOurMain data={service_single_content} />*/}
        <SecOurMain
          ServiceLeftBox={ServiceLeftBox}
          ServiceRightBox={ServiceRightBox}
        />
        <SecPaymentPlatform data={PlatformContent} img1={HomeDemo2About11} img2={HomeDemo2About12} img3={HomeDemo2Dotted1} />
        <SecOurFeatures data={FeaturesContent} />
        <WhoWeContant img={HomeDemo2coreImgMap} WhoWeHafe1={WhoWeHafe1} WhoWeHafe2={WhoWeHafe2} />
        <SecOurService data={OurService} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo2