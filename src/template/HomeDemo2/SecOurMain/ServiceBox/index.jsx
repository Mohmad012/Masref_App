const ServiceBox = ({ClassName , img , title}) => {
  return(
    <div className={ClassName}>
      <div className="inner-box">
        <div className="icon-box"><img src={img} alt="" /></div>
        <h3><a href="services-single.html">{title}</a></h3>
        <div className="text"> Iterative approaches to corporate strategy foster collaborative thinkin </div>
      </div>
    </div>
  )
}

export default ServiceBox;