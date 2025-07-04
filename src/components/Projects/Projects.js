import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dataAnalytics from "../../Assets/Projects/DataAnalytics.png";
import datapipeline from "../../Assets/Projects/DataPipeline.png";
import trendrrr from "../../Assets/Projects/Trendrrr.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "40px" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row className="g-4" style={{ justifyContent: "center" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={trendrrr}
              isBlog={false}
              title="Trendrrr"
              description="Developed a full-stack app to analyze and predict social media trends using machine learning. Built a FastAPI backend to serve ML models and a Streamlit frontend for real-time interaction. Used DistilBERT for sentiment analysis and trained trend prediction models (Random Forest, SVM, XGBoost) on tweet metadata. Integrated NLP and classification pipelines to detect trending topics, sentiment polarity, and forecast trend longevity."
              ghLink="https://github.com/geetesh012/Social_media_trend_Analysis"
              demoLink="https://trendrrr.streamlit.app"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={datapipeline}
              isBlog={false}
              title="Data-Engineering-Pipeline"
              description="This project uses Azure services for efficient data processing. Azure Data Factory extracts data into Data Lake Gen2. Databricks cleans and transforms it using PySpark/SQL. Transformed data is stored in Delta Lake or Parquet, queried with Synapse Analytics and visualized in Power BI."
              ghLink="https://github.com/geetesh012/Data_engineering_project"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={dataAnalytics}
              isBlog={false}
              title="IPL Data Analysis"
              description="This project explores IPL match data using Python. It analyzes team and player performances, toss impacts, and match outcomes using pandas and data visualizations. Highlights trends across seasons, ideal for cricket fans and data enthusiasts."
              ghLink="https://github.com/geetesh012/Data_analysis_IPL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
