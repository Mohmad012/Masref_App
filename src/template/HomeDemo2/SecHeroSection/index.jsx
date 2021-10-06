const SecHeroSection = () => {

    return (

      <section className="hero-section ico-header5 curved-section relative section-padding-100" id="home">
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 col-md-12">
                <div className="welcome-content text-left">
                  <div className="promo-section">
                    <h3 className="special-head gradient-text cyan">Become a Part of New Payment Revolution </h3>
                  </div>
                  <div className="cd-intro v2 text-left">
                    <h1 className="is-full-width thin w-text" style={{lineHeight: '1.7'}}>
                      Online Money Transfer 
                      <span className="gradient-text cyan bolder is-hidden" style={{display: 'inline'}}>Service World Wide<span className="o-text">.</span></span>
                    </h1>
                  </div>
                  <p className="g-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quaerat est, a labore excepturi rem sed eius facere error! Dolore in perspiciatis porro dolor debitis </p>
                  <div className="info-btn-group fadeInUp w-text" data-wow-delay="0.4s">
                    <a href="#" className="btn more-btn mr-3">Learn More</a>
                    <a href="#" className="btn more-btn video-btn v2  mr-3"><i className="fa fa-play" /> </a>Watch Demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SecHeroSection;