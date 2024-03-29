import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

//text rotator
import ReactTextRotator from "react-text-rotator";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import  img1 from "../../assets/images/img-1.jpg";

const content = [
    {
        text: "Professional Landing Page Template",
        className: "classA",
        animation: "fade",
    },
    {
        text: "We help startups launch their products",
        className: "classB",
        animation: "fade",
    },
    {
        text: "We shall fight in the fields and in the streets.",
        className: "classC",
        animation: "fade",
    },
    {
        text: "Perfect solution for small businesses",
        className: "classD",
        animation: "fade",
    },
];
const TextRotator = () => (
    <ReactTextRotator content={content} time={3000} startDelay={1000} />
);

const Section = props => {
    const [isOpen, setisOpen] = useState(false);

    //navtoggle menu
    const openModal = () => {
        setisOpen(!isOpen);
    };
    return (
        <React.Fragment>
            <section
                className="section section-lg vh-100"
                id="home"
                style={{
                    backgroundImage: `url('${img1.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-overlay"></div>
                <div className="display-table">
                    <div className="display-table-cell">
                        <Container>
                            <Row>
                                <Col
                                    lg={{ size: 8, offset: 2 }}
                                    className="text-white text-center"
                                >
                                    <h1 className="home-title text-rotate">
                                        <TextRotator />
                                    </h1>
                                    <p className="pt-3 home-desc">
                                        Etiam sed.Interdum consequat proin vestibulum class at a
                                        euismod mus luctus quam.Lorem ipsum dolor sit amet,
                                        consectetur adipisicing eli.
                                    </p>
                                    <p className="play-shadow  mt-4">
                                        <Link
                                            href="#"
                                            onClick={() => {
                                                openModal();
                                            }}
                                            className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i>
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                {/* Render ModalSection Component for Modal */}
                <ModalVideo
                    channel="vimeo"
                    isOpen={isOpen}
                    videoId="287684225"
                    onClose={() => setisOpen(!isOpen)}
                />
            </section>
        </React.Fragment>
    );
};

export default Section;