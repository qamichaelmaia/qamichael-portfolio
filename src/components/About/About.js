import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import skills from "../../Assets/qualifySkills.png";
import jobImg from "../../Assets/jobhunt.png";
import Toolstack from "./Toolstack";
import ExperienceCard from "./ExperienceCard"; // Importação do novo componente

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Título e conteúdo para Minhas Experiências */}
        <Row style={{ justifyContent: "center", padding: "10px 0" }}> {/* Reduzi o padding superior e inferior */}
          <Col md={7}>
            <h1
              style={{
                fontSize: "2.2em",
                textAlign: "left", // Alinhado à esquerda
                fontWeight: "bold",
                marginBottom: "10px", // Reduzi o espaçamento inferior
              }}
            >
              Minhas <strong className="purple">Experiências</strong>
            </h1>
            <ExperienceCard /> {/* Componente exclusivo de Experiências */}
          </Col>
          {/* Coluna para a imagem jobhunt */}
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "0px" }} // Reduzi o padding superior e inferior
            className="about-img"
          >
            <img src={jobImg} alt="Job Hunt" className="img-fluid" style={{ maxWidth: "100%" }} />
          </Col>
        </Row>

        {/* Título para Qualificações Técnicas */}
        <h1
          style={{
            fontSize: "2em",
            textAlign: "left", // Alinhado à esquerda
            fontWeight: "bold",
            marginBottom: "10px", // Reduzi o espaçamento inferior
          }}
        >
          Qualificações <strong className="purple">TÉCNICAS</strong>
        </h1>

        <Row style={{ justifyContent: "center", padding: "5px" }}> {/* Reduzi o padding entre as colunas */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px", // Reduzi o padding superior
              paddingBottom: "30px", // Reduzi o padding inferior
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "30px" }} // Reduzi o padding superior e inferior
            className="about-img"
          >
            <img src={skills} alt="about" className="img-fluid" style={{ maxWidth: "100%" }} />
          </Col>
        </Row>

        {/* Título e conteúdo para Linguagens */}
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

        {/* Título para Ferramentas */}
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
