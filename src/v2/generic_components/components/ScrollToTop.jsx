import { Component } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    location: PropTypes.object
};

export default withRouter(ScrollToTop);
