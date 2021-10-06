import { NavLink } from "react-router-dom";

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
              <NavLink to={path} target="_blank" rel="noopener noreferrer"><img src={img} alt="demo" className="img-responsive" /></NavLink>
              <div className="preview-btn-wrapper text-center">
                  <NavLink to={path} target="_blank" rel="noopener noreferrer" className="preview-demo">
                    {checkLinkPage && Viewdemo}
                    {checkLinkNav && nameLinkNav}
                    <i className="fa fa-long-arrow-right"></i>
                  </NavLink>
              </div>
          </div>
      </div>

  );
}

export default Demo;
