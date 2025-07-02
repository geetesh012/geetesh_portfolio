import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Lottie from "lottie-react";
import animationData from "../../Assets/about-me.json"; // same animation used in Home.js

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* ROW: Heading + About Card + Animation */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* Left Column: Heading + AboutCard */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateY(-30px)", // This moves it up
              paddingBottom: "30px",
            }}
            className="about-img"
          >
            <Lottie
              animationData={animationData}
              loop
              style={{ maxHeight: "400px", width: "100%" }}
            />
          </Col>
        </Row>

        {/* Techstack Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        {/* Tools Section */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
