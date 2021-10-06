import Typed from "react-typed"

const SecHeroSection = ({img}) => {

    return (

      <section className="hero-section ico-bg1 relative hidden" id="home">
        {/* Hero Content */}
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              {/* Welcome Content */}
              <div className="col-12 col-lg-6 col-md-12">
                <div className="welcome-content text-left">
                  <div className="promo-section">
                    <h3 className="special-head gradient-text cyan mt-s">Trusted Online Payment Platform</h3>
                  </div>
                  <div className="cd-intro v2 text-left">
                    <h1 className="cd-headline clip is-full-width thin" style={{lineHeight: '1.7'}}>
                      <span className="w-text bold">Transfer Money Across World In Real Time With </span>
                      <span className="cd-words-wrapper">
{/*                        <b className="gradient-text cyan bolder is-hidden">Lowest Fee<span className="o-text">.</span></b>
                        <b className="gradient-text cyan bolder is-visible">Easy Way<span className="o-text ">.</span></b>
                        <b className="gradient-text cyan bolder is-hidden">Less Time<span className="o-text">.</span></b>*/}

                        <Typed
                          className="gradient-text cyan bolder is-visible"
                          strings={['Lowest Fee' ,'Easy Way','Less Time']}
                          typeSpeed={50}
                          backSpeed={30}
                          backDelay={1000}
                          loop={true}
                        />
                      </span>
                    </h1>
                  </div>
                  <p className="g-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat est, a labore excepturi rem sed eius facere error! Dolore in perspiciatis porro dolor debitis Odit quaerat est</p>
                  <div className="info-btn-group fadeInUp w-text" data-wow-delay="0.4s">
                    <a href="#" className="btn more-btn pink mr-3">Learn More</a>
                    <a href="#" className="btn more-btn video-btn v2  mr-3"><i className="fa fa-play" /> </a>Watch Demo
                  </div>
                </div>
              </div>
              <div className="mt-50 col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 ">
                <div className="wow fadeInUp" data-wow-delay="0.5s">
                  <img src={img} alt="" className="sity img-responsive center-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SecHeroSection;