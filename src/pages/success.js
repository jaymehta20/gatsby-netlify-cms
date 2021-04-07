import React from "react";
import { Link } from "gatsby";

import "../styles/style.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/animsition.min.css";

const Success = () => {
  return (
    <div className="spacer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="page-intro mar-top-lg">
              <h1 className="page-title">Thank you!!</h1>
              <p> We will contact you shortly.</p>
              <div className="load-more">
                <h3>
                  <Link to="/">Go Backk</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
