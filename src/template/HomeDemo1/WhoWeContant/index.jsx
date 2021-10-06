import SectionHeading from '../../../components/SectionHeading'

const Article = ({text}) => {
  return(
      <div className="col-lg-12 col-sm-6 col-xs-12">
        <div className="article hover box-shadow">
          <h3 className="article__title">{text}</h3> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>               
        </div>
      </div>
  )
}

const WhoWeContant = ({img , WhoWeHafe1 , WhoWeHafe2}) => {
  return (
    <section className="what-we-do section-padding-100-70">
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