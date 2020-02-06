import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getLoggedInUser } from "../../helpers/authUtils";
import { Row, Col } from "reactstrap";
import View from "./view";
import Edit from "./edit";
import apiconfig from "../../constants/URL";
import "./index.css";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getLoggedInUser(),
      loading: true,
      settings: [],
      edit: false
    };
  }

  componentDidMount() {
    this.getSettings();
  }

  getSettings = () => {
    axios
      .get(apiconfig.GET_SETTINGS)
      .then(response => {
        this.setState({
          settings: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  setPage = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
  };

  render() {
    if ("release" in this.state.settings)
      this.state.settings.release_date = moment(
        this.state.settings.release_date
      ).format("YYYY-MM-DD");
    return (
      <main className="territories__dialog">
        <div className="select-territory">
          <div className="select-territory__input-wrapper">
            <div className="">
              {this.props.loading && <Loader />}
              <Row>
                <Col>
                  <div className="page-title-box">
                    <Row>
                      <Col lg={12}>
                        <h3 className="page-title message-customization__message">
                          Login Page Settings
                        </h3>
                        {this.state.edit !== true && (
                          <button
                            onClick={() => this.setPage()}
                            className="btn btn-primary float-right"
                          >
                            Edit
                          </button>
                        )}
                        {this.state.edit === true && (
                          <button
                            onClick={() => this.setPage()}
                            className="btn btn-primary float-right"
                          >
                            View
                          </button>
                        )}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              {this.state.settings && this.state.edit ? (
                <Edit settings={this.state.settings} />
              ) : (
                <View settings={this.state.settings} />
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default connect()(Settings);
