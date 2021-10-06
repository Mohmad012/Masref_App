import ServiceBox from './ServiceBox'

const SecOurMain = ({data}) => {

    return (

      <section className="section-padding-0-0 relative clearfix" style={{marginTop: '-50px'}}>
        <div className="container">
          <div className="has-shadow agency-sec">
            <div className="row">
              {data && data.map((item , key) => (
                  <ServiceBox
                          key={key}
                          img={item.img}
                          title={item.title}
                          text1={item.text1}
                          text2={item.text2}
                          text3={item.text3}
                  />
              ))}
            </div>
          </div>        
        </div>
      </section>
    );
}

export default SecOurMain;