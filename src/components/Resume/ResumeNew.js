import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Geetesh_Kankonkar_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", textAlign: "center", marginBottom: "30px" }}>
          <h1 className="resume-heading">
            My <strong className="purple">Resume</strong>
          </h1>
          <p>
            Below is a preview of my latest resume. You can view it directly or download a copy for reference.
            I am always looking for exciting opportunities to grow and contribute!
          </p>
        </Row>

        {/* Resume Viewer */}
        <Row className="resume justify-content-center">
          <Col md={8} xs={12} className="d-flex justify-content-center">
            <Document
              file={pdf}
              loading={<div>Loading resume...</div>}
              error={<div>Failed to load resume.</div>}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
        </Row>

        {/* Bottom download button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
