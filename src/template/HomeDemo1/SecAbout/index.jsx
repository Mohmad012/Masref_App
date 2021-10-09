import {
  HomeDemo1Appo
} from '../../../utils/allImgs'

const SecAbout = ({data}) => {

  return (
    <section className="about-us-area section-padding-100-70 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="service-img-wrapper mb-30">
              <div className="image-box">
                <img src={HomeDemo1Appo} className="center-block img-responsive phone-img" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-0 col-xs-12">
            {data && data.map((item , key) => (
              <div className={`services-block-four transparent ${item.checkLast && "mb-0"}`} key={key}>
                <div className="inner-box">
                  <div className="icon-icon bg4">
                    <img src={item.img} alt="" />
                  </div>
                  <h3><a className="normal" href="#">{item.title}</a></h3>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicin elit. Laudantium modi assumenda beatae provide nt dolor consectetur aliquam posuere tortor,.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecAbout;