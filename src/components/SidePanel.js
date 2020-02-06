import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

class SidePanel extends Component {
    rightBarNodeRef;

    static defaultProps = {
        title: 'Side Bar'
    }

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = {}
    }

    /**
     * 
     */
    componentWillMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    }

    /**
     * 
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    }
    /**
     * Handles the close
     */
    handleClose = (e) => {
        e.preventDefault();
        this.hide();
    }

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e) => {
        if (this.rightBarNodeRef.contains(e.target))
            return;
        // else hide the right sidebar
        this.hide();
    }

    /**
     * Hide rightside bar
     */
    hide() {
        document.body.classList.remove("sideview-bar-enabled");
    }

    render() {

        const title = this.props.title;
        const component = this.props.children || null;

        return (
            <React.Fragment>
                <div
                    className="sideview-bar"
                    ref={node => (this.rightBarNodeRef = node)}
                >
                    <div className="sideviewbar-title">
                        <Link
                            to="#"
                            className="sideview-bar-toggle float-right"
                            onClick={this.handleClose}
                        >
                            <i className="dripicons-cross noti-icon" />
                        </Link>
                        <h5 className="m-0 text-white">{title}</h5>
                    </div>
                    <PerfectScrollbar>{component}</PerfectScrollbar>
                </div>
                <div className="sideviewbar-overlay" />
            </React.Fragment>
        );
    }
}

export default connect()(SidePanel);