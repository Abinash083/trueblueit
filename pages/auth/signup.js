import React, { useState } from "react";
import Link from "next/link";
// Formik validation
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

import { Container, Row, Col, Card, CardBody, Form } from "reactstrap";
// import Switcher from "../../components/Footer/Switcher";

const Signup = () => {
  const [state] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  return (
    <React.Fragment>
      <div className="account-home-btn d-none d-sm-block">
        <Link href="/" className="text-white">
          <i className="mdi mdi-home h1"></i>
        </Link>
      </div>

      <section className="bg-account-pages vh-100">
        <div className="display-table">
          <div className="display-table-cell">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5}>
                  <Card className="account-card">
                    <CardBody>
                      <div className="text-center mt-3">
                        <h3 className="fw-bold">
                          <Link
                            href="/"
                            className="text-dark text-uppercase account-pages-logo"
                          >
                            Dorsin
                          </Link>
                        </h3>
                        <p className="text-muted">Sign up for a new Account</p>
                      </div>
                      <div className="p-3">
                        <Formik
                          enableReinitialize={true}
                          initialValues={{
                            firstName: (state && state.firstName) || "",
                            email: (state && state.email) || "",
                            password: (state && state.password) || "",
                          }}
                          validationSchema={Yup.object().shape({
                            firstName: Yup.string().required(
                              "Please Enter Your First Name"
                            ),
                            email: Yup.string().required(
                              "Please Enter Your email"
                            ),
                            password: Yup.string().required(
                              "Please Enter Your Password"
                            ),
                          })}
                          onSubmit={(values) => {
                            console.log(values);
                          }}
                        >
                          {({ errors, status, touched }) => (
                            <Form 
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            >
                              <div className="mb-3">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  First Name
                                </label>
                                <Field
                                  name="firstName"
                                  type="firstName"
                                  placeholder="First Name"
                                  className={
                                    "form-control" +
                                    (errors.firstName && touched.firstName
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="firstName"
                                  component="div"
                                  className="invalid-feedback"
                                />
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                                <Field
                                  name="email"
                                  type="email"
                                  placeholder="Enter Email"
                                  className={
                                    "form-control" +
                                    (errors.email && touched.email
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="invalid-feedback"
                                />
                                <label
                                  htmlFor="password"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <Field
                                  name="password"
                                  type="password"
                                  placeholder="Enter password"
                                  className={
                                    "form-control" +
                                    (errors.password && touched.password
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="invalid-feedback"
                                />
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                  Remember me
                                </label>
                              </div>

                              <div className="d-grid mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Sign in
                                </button>
                              </div>

                              <div className="mt-4 mb-0 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <Link href="/auth/login" className="text-danger">
                                    Sign in
                                  </Link>
                                </p>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* color switcher */}
        {/* <Switcher /> */}
      </section>
    </React.Fragment>
  );
};

export default Signup;
