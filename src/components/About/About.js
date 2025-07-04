import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Lottie from "lottie-react";
import animationData from "../../Assets/about-me.json";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* ROW: Heading + About Card + Animation */}
        <Row
          className="align-items-center"
          style={{ justifyContent: "center", padding: "10px 0 50px 0" }}
        >
          {/* Left Column: Heading + AboutCard */}
          <Col md={7} className="mb-4">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          {/* Right Column: Lottie Animation */}
          <Col md={5} className="d-flex justify-content-center">
            <Lottie
              animationData={animationData}
              loop
              style={{ maxHeight: "380px", width: "100%", maxWidth: "380px" }}
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
