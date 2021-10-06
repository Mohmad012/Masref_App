const Demo = ({
  img,
  path,
  lastPage,
  lastLinkNav,
  checkLinkPage,
  checkLinkNav,
  Viewdemo,
  nameLinkNav
}) => {

  return (
      <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="demo-item">
              <a href={path} rel="noopener noreferrer"><img src={img} alt="demo" className="img-responsive" /></a>
              <div className="preview-btn-wrapper text-center">
                  <a href={path} rel="noopener noreferrer" className="preview-demo">
                    {checkLinkPage && Viewdemo}
                    {checkLinkNav && nameLinkNav}
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
              </div>
          </div>
      </div>

  );
}

export default Demo;
