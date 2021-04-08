import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";



const Contact = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="page-intro mar-top-lg">
                <h1 className="page-title">Let's Talk</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <form
                name="contact"
                method="POST"
                id="contact-form"
                data-netlify="true"
                action="pages/success.html"
              >
                <p>
                  Hi, my name is
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  . I want to order from you
                  <span className="select">
                    <select name="service" id="contact-service" required>
                      <option value="">-</option>
                      <option value="Branding">Branding</option>
                      <option value="Website">Website</option>
                      <option value="UI/UX">Design</option>
                      <option value="Graphic-Design">Other</option>
                    </select>
                  </span>
                  service. You can contact me at
                  <input
                    id="contact-email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  to discuss details.
                </p>
                <div className="submit-button">
                  <button type="submit" id="contact-submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
