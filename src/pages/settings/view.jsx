import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getLoggedInUser } from "../../helpers/authUtils";
import { Row, Col } from "reactstrap";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let settings = this.props.settings;
    console.log(settings);
    return (
      <React.Fragment>
        <div className="">
          {this.props.loading && <Loader />}
          <div className="form-group row">
            <label className="col-md-2 label_text">Company Name : </label>
            <div className="col-md-6">{settings.company_name}</div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 label_text">Background Image : </label>
            <div className="col-md-6">
              <img
                src={settings.background_image}
                alt="ads via Carbon"
                style={{ maxWidth: "130px" }}
                border="0"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 label_text">Welcome Message : </label>
            <div className="col-md-6">{settings.welcome_message}</div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 label_text">Company Logo : </label>
            <div className="col-md-6">
              <img
                src={settings.logo}
                alt="ads via Carbon"
                style={{ maxWidth: "130px", background: "#444444" }}
                border="0"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 label_text">Contact Us Message :</label>
            <div className="col-md-6">{settings.contactus}</div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 label_text">Copyright Message : </label>
            <div className="col-md-6">{settings.copyright}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Settings);
