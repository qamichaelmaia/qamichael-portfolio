import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import homeLogo from "../../Assets/port-perfil.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { ImPointRight } from "react-icons/im"; 

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 8 }} className="heading">
                Olá, Bem-vindo(a)!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Me chamo
                <strong className="main-name"> Michael Maia </strong>
                e sou...
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                transitionSpeed={300}
                scale={1.1}
                className="tilt-effect"
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "300px", maxWidth: "100%" }}
                />
              </Tilt>
            </Col>
          </Row>
          <Row className="mt-0">
            <Col md={6}>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      Atualmente participo de projetos como Freelancer na Crowdtest e sou QA Voluntário no projeto Pipoca Ágil. Sou formado no curso Engenheiro de Qualidade de Software na EBAC, e estou concluindo a graduação de Análise e Desenvolvimento de Sistemas pela Faculdade VINCIT, tenho excelência em Automação de Testes e Testes Exploratórios. Com forte conhecimento em gerenciamento de projetos, tenho como metodologias o Scrum e Kanban especialmente em projetos Shift-left.
                      <br />
                      <br />
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <h4>
                      <span style={{ color: "#d2b8ff" }}>Também tenho alguns Hobbies como...</span>
                    </h4>
                    <br />

                    <ul>
                      <li className="about-activity">
                        <ImPointRight /> Astronomia
                      </li>
                      <li className="about-activity">
                        <ImPointRight /> Ilustração Digital
                      </li>
                      <li className="about-activity">
                        <ImPointRight /> Viagens, Trilhas e Rapel
                      </li>
                      <li className="about-activity">
                        <ImPointRight /> Filmes, Séries e Jogos
                      </li>
                    </ul>

                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Novo Row para a frase centralizada */}
          <Row className="justify-content-center mt-5">
            <Col md={8} className="text-center">
              <p
                style={{
                  color: "rgb(155 126 172)",
                  fontStyle: "italic", // Tornando o texto mais destacado
                }}
              >
                "Dê o seu melhor para construir coisas que possam fazer a diferença!"
              </p>
              <footer className="blockquote-footer">
                Michael Maia
              </footer>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Seção Home2 */}
      <Home2 />
    </section>
  );
}

export default Home;
