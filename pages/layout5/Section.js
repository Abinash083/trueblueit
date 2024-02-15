import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

import Image from 'next/image';

//import images
import homeDashboard from "../../assets/images/lifeisok/wheelchair.png";
import bgImage from "../../assets/images/img-2.jpg";


const Section = () => {
    return (
        <React.Fragment>
            <section
                className="home-padding-t-150 position-relative"
                id="home"
                style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: "cover", backgroundPosition: "center"}}
            >
                <div className="bg-overlay"></div>
                <div className="display-table">
                    <div className="home-cell-bottom">
                        <Container>
                            <Row>
                                <Col
                                    lg={{ size: 8, offset: 2 }}
                                    className="text-white text-center"
                                >
                                    <h1 className="home-title">
                                        We help startups launch their products
                                    </h1>
                                    <p className="pt-3 home-desc">
                                        Etiam sed.Interdum consequat proin vestibulum class at a
                                        euismod mus luctus quam.Lorem ipsum dolor sit amet,
                                        consectetur adipisicing eli.
                                    </p>
                                    <Link href="#" className="btn btn-primary mt-4">Get Started
                                    </Link>
                                    <Image
                                        alt="dashboard"
                                        src={homeDashboard}
                                        className="img-fluid center-block mt-4"
                                        priority
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section;