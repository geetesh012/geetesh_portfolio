import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Turning ideas into interactive experiences—one line of code at a time.
              <br />
              <br />
              A frontend developer passionate about clean design and seamless interaction. I specialize in
              <i>
                <b className="purple"> React and Next.js</b>
              </i>
              , with a strong focus on
              <i>
                <b className="purple"> UI/UX design</b>
              </i>
              .
              <br />
              <br />
              My goal is to build clean, efficient, and engaging interfaces that blend design and functionality seamlessly.
              <br />
              <br />
              I enjoy transforming ideas into pixel-perfect, interactive products that users love to explore.
            </p>
          </Col>

          <Col md={4} className="myAvtar d-flex justify-content-center">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="profileP"
                style={{
                  maxWidth: "280px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
                }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social text-center mt-5">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links d-flex justify-content-center gap-4 flex-wrap">
              <li className="social-icons">
                <a
                  href="https://github.com/geetesh012"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Geetesh_12_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/geetesh-kankonkar-1365b11a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/geetesh__12/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={30} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
