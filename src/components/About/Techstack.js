import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiPython, DiJava } from "react-icons/di";
import { SiTypescript, SiCsharp, SiDotnet } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJavascript1 style={{ fontSize: "4rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>JavaScript</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <DiPython style={{ fontSize: "4rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Python</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiTypescript style={{ fontSize: "4rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>TypeScript</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJava style={{ fontSize: "4rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>Java</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiCsharp style={{ fontSize: "4rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>C#</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons" style={{ textAlign: "center" }}>
        <SiDotnet style={{ fontSize: "4rem" }} />
        <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>.NET</div>
      </Col>
    </Row>
  );
}

export default Techstack;
