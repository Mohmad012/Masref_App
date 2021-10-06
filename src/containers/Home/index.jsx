import {useEffect}  from "react";
import data from '../../data/data-containers/data-Home.js';

import {handelTitle} from '../../utils'


// import Footer from '../../layouts/Footer'
import FooterHome from '../../layouts/Footer/FooterHome'
// import {Fluid1 , Fluid2} from './Fluid';
import SectionHeading from '../../components/SectionHeading'
import Preloader from '../../components/Preloader'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {

  useEffect(() => {
    // handelTitle('Home')
  },[])

  // useEffect(() => {
  //   if (document.title === 'Home Template') {
  //   	document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(180deg,#240044 0,#0f0240 25%,#400959 40%,#0f0240 65%,#0f0240)'
  //   }else{
  //   	document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #4834d4, #341f97)'
  //   }
  // },[])

    return (
      <>
        <Preloader Title="Home" />
        <section className="demo section-padding-100-70" id="demo">
          <div className="container">
            <SectionHeading title='Creative designs' text='Choose a demo' />
            <SectionDemo data={data} />
          </div>
        </section>
        <FooterHome />
      </>
    );
}

export default HomeContainer;

