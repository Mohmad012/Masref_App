import SectionHeading from '../SectionHeading'
import Article from "./Article"

const WhoWeContant = ({img , WhoWeHafe1 , WhoWeHafe2 , ClassSec}) => {
  return (
    <section className={ClassSec}>
      <div className="container">
        <SectionHeading title='OUR EXPECTED GROWTH' text='Our Global Growth' />
        <div className="clearfix" />
        <div className="row align-items-center">
          <div className="col-12 col-lg-3">
            <div className="row">
              {WhoWeHafe1 && WhoWeHafe1.map((item , key) => (
                <Article key={key} text={item.text} />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="map-container">
              <img src={img} className="mb-30" alt="saas" />
            </div>
          </div>
          <div className="col-12 col-lg-3 ">
            <div className="row">
              {WhoWeHafe2 && WhoWeHafe2.map((item , key) => (
                <Article key={key} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeContant