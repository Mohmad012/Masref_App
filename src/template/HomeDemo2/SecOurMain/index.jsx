import {
  HomeDemo2AppDesign
} from '../../../utils/allImgs'

import ServiceBox from './ServiceBox'

const SecOurMain = ({ServiceLeftBox , ServiceRightBox}) => {

    return (

      <section className="what-we-do relative sec-before3 section-padding-100" id="features">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="fadeInUp" data-aos="fade-up" data-aos-delay='200'>Our Main <span className="gradient-text blue normal">Features</span></h2>
            <p className="fadeInUp" data-aos="fade-up" data-aos-delay='300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="clearfix" />
          <div className="outer">
            {/*Logo*/}
            <div className="inner-circle"><a href="#"><img className="phone" src={HomeDemo2AppDesign} alt="image" /></a></div>
            <div className="row clearfix">
              {/*Left Column*/}
              <div className="left-column col-lg-4 col-md-6 col-sm-6 col-xs-12">
                {ServiceLeftBox && ServiceLeftBox.map((item , key) => (
                  <ServiceBox
                    key={key}
                    ClassName={item.ClassName}
                    img={item.img}
                    title={item.title}
                  />
                ))}
              </div>
              {/*Right Column*/}
              <div className="right-column col-lg-4 col-md-6 col-sm-6 col-xs-12">
                {ServiceRightBox && ServiceRightBox.map((item , key) => (
                  <ServiceBox
                    key={key}
                    ClassName={item.ClassName}
                    img={item.img}
                    title={item.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SecOurMain;