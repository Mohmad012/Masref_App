const SecPaymentPlatform = ({data , img1 , img2 , img3}) => {
  return(
      <section className="relative section-padding-100-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="ab-wrapper">
                <img className="abso-img1" src={img1} alt="" />
                <img className="wow abso-img2 floating animated" data-wow-delay="0.2s" src={img2} alt="" />
                <img className="abso-img3" src={img3} alt="" />
              </div> 
            </div>
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant mt-s">
                <div className="mb-15 text-left" data-wow-delay="0.2s">
                  <span className="gradient-text blue">Reliable Online Payment Platform</span>
                </div>
                <h4 data-wow-delay="0.3s">Transfer and Deposite your money anytime, anywhere in the world</h4>
                <p data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit eum illum tempora? Ducimus eum culpa voluptates dolorem dolorum et sit nisi, mollitia animi porro fuga sequi, molestias repellat excepturi nobis eum culpa voluptates dolorem dolorum et.</p>
                {data && data.map((item , key) => (
                  <div className={`services-block-four v2 ${item.checkFirst && "mt-30"}`}>
                    <div className="inner-box">
                      <div className="icon-font-box">
                        <i className="fa fa-check" />
                      </div>
                      <h3><a href="#">{item.title}</a></h3>
                      <div className="text width-80">Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit alias officia aperiam.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SecPaymentPlatform