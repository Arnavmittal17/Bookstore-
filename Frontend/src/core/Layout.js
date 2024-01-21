import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Pic1 from "../images/Pic1.jpeg";
import Pic2 from "../images/Pic2.jpeg";

const Layout = ({
    className,
    children
}) => (
    <div>
        <div>
            <Menu />
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Pic1} alt="First slide" style={{ height: "400px" }}/>
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src={Pic2} alt="Third slide" style={{ height: "400px" }}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
        <br/> <br/>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
