import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCypress,
  SiSelenium,
  SiPlaywright,
  SiRobotframework,
  SiAndroidstudio,
  SiPostman,
  SiGraphql,
  SiSwagger,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiGitlab,
  SiJenkins,
  SiGithubactions,
  SiJira,
  SiTrello,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiCypress style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Cypress</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiSelenium style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Selenium</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiRobotframework style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Robotframework</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPlaywright style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Playwright</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiAndroidstudio style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Android Studio</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostman style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Postman</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiGraphql style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>GraphQL</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiSwagger style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Swagger</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiDocker style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Docker</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiMongodb style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>MongoDB</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiMysql style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>MySQL</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiGitlab style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>GitLab</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiJenkins style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Jenkins</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiGithubactions style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>GitHub Actions</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiJira style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Jira</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiTrello style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Trello</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVisualstudiocode style={{ fontSize: "3rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Visual Studio Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
