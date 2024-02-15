import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image';

//import images
import payment from "../../assets/images/payment.png";

const FooterLink = () => {
    return (
        <React.Fragment>
            <div className="footer-alt">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="float-start pull-none">
                                <p className="copy-rights text-muted">
                                    2019 - 2020 © Dorsin - Themesbrand
                                </p>
                            </div>
                            <div className="float-end pull-none">
                                <Image
                                    alt="payment"
                                    src={payment}
                                    height="36"
                                />
                            </div>
                            <div className="clearfix"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default FooterLink;