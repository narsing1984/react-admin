import React, { Component } from 'react';

/**
 * Renders the preloader
 */
class PreLoaderWidget extends Component {

    render() {
        return (
            <div className="preloader loaderSpinnerOverlay">
                <div className="status loaderSpinnerStatus">
                    <div
                        className="spinner-border avatar-lg text-primary m-2"
                        role="status"
                    />
                </div>
            </div>
        )
    }
}

export default PreLoaderWidget;