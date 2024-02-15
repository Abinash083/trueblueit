import React from 'react';
import { Col } from "reactstrap";
import Link from "next/link";
import Image from 'next/image';

const BlogBox = ({ blogs }) => {
    return (
        <React.Fragment>
            {(blogs || []).map((blog, key) => (
                <Col key={key} lg={4}>
                    <div className="blog-box mt-4 hover-effect">
                        <Image src={blog.image} className="img-fluid" alt="blog" />
                        <div>
                            <h5 className="mt-4 text-muted">{blog.category}</h5>
                            <h4 className="mt-3 blog-title">
                                <Link href="#" className="blog-title">{blog.title}{" "}
                                </Link>
                            </h4>
                            <p className="text-muted">{blog.desc}</p>
                            <div className="mt-3">
                                <Link href="#" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </React.Fragment>
    );
}

export default BlogBox;