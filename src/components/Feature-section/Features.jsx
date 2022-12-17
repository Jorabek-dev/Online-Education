import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "When you have enough time, these are the best ways to learn a long text. Yes, they take time. You’ll also be much more prepared for exam surprises, and have filled in gaps in your knowledge already.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "When you have enough time, these are the best ways to learn a long text. Yes, they take time. You’ll also be much more prepared for exam surprises, and have filled in gaps in your knowledge already.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "When you have enough time, these are the best ways to learn a long text. Yes, they take time. You’ll also be much more prepared for exam surprises, and have filled in gaps in your knowledge already.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
