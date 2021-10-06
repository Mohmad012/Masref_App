import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from '../SectionHeading'
import './Testimonial.scss'
import SwiperCore, {
  Pagination
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Pagination]);
// import "./styles.css";



// install Swiper modules

const TestimonialArea = ({data}) => {
	return(
      <section className="clients_testimonials_area bg-img section-padding-0-0" id="test">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading title='Our Testimonials' text='Loved By Our Clients' />
            </div>
          </div>
        </div>
        <div className="cotainer-fluid">
          <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.4s">
            <div className="col-12 col-md-10 col-xs-10 offset-xs-1">
              {/*<div className="client_slides owl-carousel">*/}
		      <Swiper
		        slidesPerView={2}
		        spaceBetween={2}
		        slidesPerGroup={2}
		        loop={true}
		        loopFillGroupWithBlank={false}
		        pagination={{
		          clickable: true
		        }}
		        scrollbar={{ draggable: true }}
		        navigation={false}
		        autoplay={true}
		        className="client_slides"
		      >
                {data && data.map((item , key) => (
	                <SwiperSlide className="single-testimonial text-center" key={key}>
	                  {/* Testimonial Image */}
	                  <div className="testimonial_image">
	                    <img src={item.img} alt="" />
	                  </div>
	                  {/* Testimonial Feedback Text */}
	                  <div className="testimonial-description">
	                    <div className="testimonial_text">
	                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magni, quisquam, accusantium dolores atque, doloribus odit minus maiores sunt mollitia consequatur, soluta quasi.</p>
	                    </div>
	                    {/* Admin Text */}
	                    <div className="admin_text">
	                      <h5>{item.name}</h5>
	                      <p>{item.title}</p>
	                    </div>
	                  </div>
	                </SwiperSlide>
                ))}
              {/*</div>*/}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
	)
}

export default TestimonialArea