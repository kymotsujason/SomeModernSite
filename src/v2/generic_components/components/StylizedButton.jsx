import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

class StylizedButton extends Component {
    render() {
        let width = this.props.width;
        let text = this.props.text;
        let url = this.props.url;
        return (
            <div
                className="pseudo_button center_content custom_button center_text"
                style={{
                    width: width,
                    marginBottom: "3em"
                }}
            >
                <NavLink to={url}>
                    <div
                        style={{
                            padding: "1em",
                            marginLeft: "-2em",
                            color: "white"
                        }}
                    >
                        {text}
                    </div>
                </NavLink>
            </div>
        );
    }
}

StylizedButton.propTypes = {
    width: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string
};

export default StylizedButton;