import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import code_img from "../assets/Code.png";

class Home extends Component {
    render() {
        return (
            <div>
                <Panel img={code_img}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="subheader">
                                Here to turn ideas into algorithms
                            </p>
                            <p className="header">
                                Let's build the future together
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">Web Development (my focus)</p>
                            <p className="subtitle">
                                Real talk. You need websites that look amazing,
                                feel natural, and actually work. Well, that's
                                what I do. Feel free to read on and learn more
                                about me or give me a call (or email).
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">
                                I create algorithms to solve problems in a
                                simple, yet efficient manner.
                            </p>
                            <p className="subtitle">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus sit amet eros suscipit,
                                rutrum ante gravida, imperdiet purus. Mauris
                                lectus arcu, sodales vel tortor et, tincidunt
                                faucibus mauris. Sed et volutpat erat.
                                Pellentesque nec sapien eros. Nullam id molestie
                                nisi. Donec a convallis purus, id vehicula nisl.
                                Nullam non magna mattis, placerat purus at,
                                faucibus elit. Maecenas eu dictum enim. Fusce
                                consequat tortor nulla, non iaculis arcu
                                eleifend ac. Vestibulum rutrum lorem id erat
                                hendrerit efficitur. Quisque ornare laoreet
                                lacinia. Sed id consequat ligula. Interdum et
                                malesuada fames ac ante ipsum primis in
                                faucibus. Curabitur vitae pulvinar augue.
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">Project</div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="subheader">
                                Looking for an exceptional web developer?
                            </p>
                            <p className="header">Hire me today</p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">Blog</div>
                </Panel>
            </div>
        );
    }
}

export default Home;