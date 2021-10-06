import {
  FeaturesContent,
  PlatformContent,
  ServicesContent
} from '../../data/data-containers/data-about.js'


import {
  AboutAbout11,
  AboutAbout12,
  AboutDotted1,
  AboutCoreImgAppo
} from '../../utils/allImgs'

import Breadcumb from '../../components/Breadcumb'

import SecOurFeatures from "./SecOurFeatures"
import SecPaymentPlatform from "./SecPaymentPlatform"
import SecAboutUs from "./SecAboutUs"


import Header from '../../layouts/Header'
import FooterWith from '../../layouts/Footer/FooterWith'


const AboutContainer = () => {

  return (
    <div>
      <Header Title="About" />
      <Breadcumb title='About us' text='Home' />
      <SecOurFeatures data={FeaturesContent} />
      <SecPaymentPlatform data={PlatformContent} img1={AboutAbout11} img2={AboutAbout12} img3={AboutDotted1} />
      <SecAboutUs
        firstClass="about-us-area section-padding-100-70 clearfix"
        data={ServicesContent}
        img={AboutCoreImgAppo}
      />
      <FooterWith />
    </div>
  );
}

export default AboutContainer