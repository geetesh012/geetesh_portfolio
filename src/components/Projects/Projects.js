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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trendrrr}
              isBlog={false}
              title="Trendrrr"
              description="Developed a full-stack app to analyze and predict social media trends using machine learning. Built a FastAPI backend to serve ML models and a Streamlit frontend for real-time interaction. Used DistilBERT for sentiment analysis and trained trend prediction models (Random Forest, SVM, XGBoost) on tweet metadata. Integrated NLP and classification pipelines to detect trending topics, sentiment polarity, and forecast trend longevity."
              ghLink="https://github.com/geetesh012/Social_media_trend_Analysis"
              demoLink="https://trendrrr.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datapipeline}
              isBlog={false}
              title="Data-Engineering-Pipeline"
              description="The project uses Azure services for efficient data processing. Azure Data Factory extracts data from an HTTPS source into Data Lake Gen2. Databricks cleans and transforms it using PySpark/SQL, storing it in Delta Lake or Parquet. Transformed data is queried via Synapse Analytics and visualized in Power BI."
              ghLink="https://github.com/geetesh012/Data_engineering_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataAnalytics}
              isBlog={false}
              title="IPL-Data-Analysis"
              description="The Data_analysis_IPL project explores IPL match data using Python. It analyzes team and player performances, toss impacts, and match outcomes using pandas and visualization libraries. Insights are presented through graphs, highlighting trends across seasons. It’s ideal for cricket fans and data enthusiasts interested in sports analytics."
              ghLink="https://github.com/geetesh012/Data_analysis_IPL"           
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink=""       
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
