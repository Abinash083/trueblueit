import React, { useState } from 'react';
import Link from 'next/link';

import { Container, Row, Col } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Image from 'next/image';

//import images
import bgPattern from "../../assets/images/bg-pattern.png";

const Section = () => {
    const [isOpen, setisOpen] = useState(false);

    //navtoggle menu
    const openModal = () => {
        setisOpen(!isOpen);
    };
    return (
        <React.Fragment>
            <section
                className="section bg-home home-half"
                data-image-src="images/bg-home.jpg"
                id="home"
            >
                <div className="bg-overlay"></div>
                <div className="display-table">
                    <div className="display-table-cell">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={8} className="text-white text-center">
                                    <h1 className="home-title">
                                        We help startups launch their products
                                    </h1>
                                    <p className="pt-3 home-desc">
                                        Etiam sed.Interdum consequat proin vestibulum class at.
                                    </p>
                                    <p className="play-shadow mt-4">
                                        <Link href="#"
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
                <div className="bg-pattern-effect">
                    <Image
                        src={bgPattern}
                        alt="dorsin"
                        width={2000}
                        height={40}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </section>
            <ModalVideo
                channel="vimeo"
                isOpen={isOpen}
                videoId="287684225"
                onClose={() => setisOpen(!isOpen)}
            />
        </React.Fragment>
    );
};

export default Section;