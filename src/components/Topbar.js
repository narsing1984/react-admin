import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";
import "./index.css";
import companyLogo from "../assets/images/cardiocap@2x.png";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
const history = createBrowserHistory();

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="portal-header">
        <button
          className="portal-header__nav-toggle"
          onClick={() => {
            $("#nav-menu").toggleClass("nav-menu-show");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="menu-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <nav className="nav-menu" id="nav-menu">
          <ul>
            <li
              className="nav-menu__item selected"
              onClick={() => history.push("/settings")}
            >
              Page Settings
            </li>
            <li className="nav-menu__divider"></li>

            <Link className="nav-menu__item" to="/logout">
              Sign Out
            </Link>
          </ul>
        </nav>
        <p className="portal-header__company-name">General Pharma Co.</p>
        <div className="portal-header__right">
          <p className="portal-header__greeting">Welcome, Admin</p>
        </div>
      </div>
    );
  }
}

export default connect()(Topbar);
