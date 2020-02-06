import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoggedInUser } from "../../helpers/authUtils";
import { Row, Col } from "reactstrap";
import "./index.css";
import { Link } from "react-router-dom";

class DefaultDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getLoggedInUser(),
      dashboardData: [],
      loading: true
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="selected-hcp">
          <ul className="hcp-selection__list">
            <li className="hcp-selection__list-header">
              <div className="hcp-selection__icon-header"></div>
              <h3
                className="hcp-selection__name-header"
                style={{ fontWeight: "bold" }}
              >
                Admin Dashboard
              </h3>
            </li>
          </ul>
        </div>
        <div className="message-selection">
          <ul className="message-selection__list">
            <Link to="/settings">
              <li
                className="message-selection__list-item"
                style={{ cursor: "pointer" }}
              >
                <p className="message-selection__message-flavor">
                  Login Page Settings
                </p>
                <p className="message-selection__message">
                  Update Logo, Footer Message, Contact Us , Welcome Details...
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="forward-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect()(DefaultDashboard);
