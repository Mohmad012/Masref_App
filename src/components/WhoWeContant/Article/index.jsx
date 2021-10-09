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

export default Article