const ServiceBox = ({img , title , text1 , text2 , text3}) => {
  return(
	<div className="col-lg-4 col-md-6 col-sm-12 ">
		<div className="services-block-four v2">
		  <div className="inner-box">
		    <div className="icon-img-box">
		      <img src={img} alt="" />
		    </div>
		    <h3><a href="#">{title}</a></h3>
		    <div className="text">Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit.</div>
		    <div className="side-feature-list-item v2 ">
		      <i className="fa fa-check check-mark-icon-font" aria-hidden="true" />
		      <div className="foot-c-info">{text1}</div>
		    </div>
		    <div className="side-feature-list-item v2 ">
		      <i className="fa fa-check check-mark-icon-font" aria-hidden="true" />
		      <div className="foot-c-info">{text2}</div>
		    </div>
		    <div className="side-feature-list-item v2 ">
		      <i className="fa fa-check check-mark-icon-font" aria-hidden="true" />
		      <div className="foot-c-info">{text3}</div>
		    </div>
		  </div>
		</div>
	</div>
  )
}

export default ServiceBox;