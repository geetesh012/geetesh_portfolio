import React from "react";
import Card from "react-bootstrap/Card";
import { FaLongArrowAltRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Geetesh Kankonkar </span>
            from <span className="purple"> Goa, India.</span>
            <br />  
            I am currently employed as a software developer at ...
            <br />
            I have completed Bachelor of Engineering (BE) in Information Technology at GEC
            Goa.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
<ul>
  <li className="about-activity">
    <FaLongArrowAltRight className="arrow-icon" /> Playing Games
  </li>
  <li className="about-activity">
    <FaLongArrowAltRight className="arrow-icon" /> Sports Analysis
  </li>
  <li className="about-activity">
    <FaLongArrowAltRight className="arrow-icon" /> Travelling
  </li>
</ul>
          <p style={{ color: "rgb(45, 129, 255)" }}>
            "BE YOURSELF!"{" "}
          </p>
          <footer className="blockquote-footer">Geetesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
