import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Novo título adicionado no topo da página */}
        <h1
          style={{
            fontSize: "2em",
            textAlign: "left", // Alinhado à esquerda
            fontWeight: "bold",
            marginBottom: "-25px", // Espaçamento inferior
          }}
        >
          Qualificações <strong className="purple">TÉCNICAS</strong>
        </h1>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Novo título e conteúdo para Linguagens */}
        <h3
          className="project-heading"
          style={{
            fontSize: "1.5em",
            textAlign: "center", // Centralizando o título
          }}
        >
          Minhas <strong className="purple">LINGUAGENS</strong>
        </h3>
        <Techstack />

        {/* Já existente - Ferramentas */}
        <h3
          className="project-heading"
          style={{
            fontSize: "1.5em",
            textAlign: "center", // Centralizando o título
          }}
        >
          Minhas <strong className="purple">FERRAMENTAS</strong>
        </h3>
        <Toolstack />

        {/* Já existente - Github */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
