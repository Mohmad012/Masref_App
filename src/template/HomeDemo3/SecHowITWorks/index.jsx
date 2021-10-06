import SectionHeading from '../../../components/SectionHeading'

import {
  ServicesCoreImgAppo
} from '../../../utils/allImgs'

const SecHowITWorks = ({ServicesBlockInfo}) => {
  return (
      <section className="about-us-area special section-padding-100 clearfix cir-right">
        <div className="container">
          <SectionHeading title='How IT Works' text=' How Our Platform Works' />
          <div className="row align-items-center">
            <div className="services-column col-lg-6 col-xs-12">
              {ServicesBlockInfo && ServicesBlockInfo.map((item , key) => (
                <div className="services-block-four how" key={key} style={{marginBottom: `${item.checkLast ? 0 : "30px" }`}}>
                  <div className="inner-box">
                    <div className="step">{item.Step}</div>
                    <h3><a className="normal" href="#">{item.title}</a></h3>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae nonic.</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-6 mt-s">
              <div className="service-img-wrapper">
                <div className="image-box">
                  <img src={ServicesCoreImgAppo} className="center-block img-responsive phone-img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default SecHowITWorks