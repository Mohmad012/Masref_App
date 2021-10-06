import './Team.scss'

import SectionHeading from '../SectionHeading'

const TeamArea = ({data}) => {
	return(
	<section className="our_team_area section-padding-0-70 clearfix" id="team">
		<div className="container">
		  <div className="row">
		    <div className="col-12">
		      <SectionHeading title='Our Creative Team' text='Our Awesome Team' />
		    </div>
		  </div>
		  <div className="row">
		    {data && data.map((item , key) => (
			    <div className="col-12 col-sm-6 col-lg-3" key={key}>
			      <div className="our-team ico-team">
			        <div className="team_img">
			          <img src={item.img} className="mt-30 width-80" alt="chef-1" />
			          <ul className="social">
			            <li><a href="#"><i className="fa fa-facebook" /></a></li>
			            <li><a href="#"><i className="fa fa-twitter" /></a></li>
			            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			          </ul>
			        </div>
			        <div className="team-content">
			          <h4 className="title">{item.name}</h4>
			          <span className="post">{item.title}</span>
			        </div>
			      </div>
			    </div>
		    ))}
		  </div>
		</div>
	</section>
	)
}

export default TeamArea