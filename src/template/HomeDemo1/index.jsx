import {
          AbsoImgInfo,
          service_single_content,
          FeaturesContent,
          PlatformContent,
          WhoWeHafe1,
          WhoWeHafe2,
          OurService,
       } from '../../data/data-containers/data-HomeDemo1.js';

import {
        HomeDemo1About11,
        HomeDemo1About12,
        HomeDemo1Dotted1,
        HomeDemo1coreImgMap
        } from '../../utils/allImgs'

import './style/HomeDemo1.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from './SecHeroSection'
import SecAbout from './SecAbout'
import SecOurFeatures from './SecOurFeatures'
import SecPaymentPlatform from './SecPaymentPlatform'
import WhoWeContant from './WhoWeContant'
import SecOurService from './SecOurService'

const HomeDemo1 = () => {

    return (
      <div>
        <Header Title="Home Template1" />
        <SecHeroSection AbsoImgInfo={AbsoImgInfo} />
        <div className="clearfix" />
        <SecAbout data={service_single_content} />
        <SecOurFeatures data={FeaturesContent} />
        <SecPaymentPlatform data={PlatformContent} img1={HomeDemo1About11} img2={HomeDemo1About12} img3={HomeDemo1Dotted1} />
        <WhoWeContant img={HomeDemo1coreImgMap} WhoWeHafe1={WhoWeHafe1} WhoWeHafe2={WhoWeHafe2} />
        <SecOurService data={OurService} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo1