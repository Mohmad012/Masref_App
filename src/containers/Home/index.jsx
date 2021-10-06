import data from '../../data/data-containers/data-Home.js';

// import Footer from '../../layouts/Footer'
import FooterHome from '../../layouts/Footer/FooterHome'
// import {Fluid1 , Fluid2} from './Fluid';
import SectionHeading from '../../components/SectionHeading'
import Preloader from '../../components/Preloader'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {

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

