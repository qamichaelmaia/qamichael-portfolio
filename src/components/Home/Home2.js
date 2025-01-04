import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Importando Button
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="home-about-description text-center">
            <Button
              variant="primary"
              href="about" // Isso leva para a seção com o ID "sobre"
              style={{ marginTop: "-200px", marginBottom: "20px", marginRight: "10px" }} // Ajuste da margem
            >
              Qualificações
            </Button>

            {/* Botões Projetos e Currículo ao lado */}
            <Button
              variant="primary"
              href="project" // Substitua pelo link do seu repositório de projetos
              style={{ marginTop: "-200px", marginBottom: "20px", marginRight: "10px" }}
            >
              Projetos
            </Button>

            <Button
              variant="primary"
              href="resume" // Substitua pelo link do seu currículo ou LinkedIn
              style={{ marginTop: "-200px", marginBottom: "20px" }}
            >
              Currículo
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>MEUS CONTATOS</h1>
            <p>
              Vamos nos <span className="purple">conectar </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/qamichael/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/qamichaelmaia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:contatomichaelmaia@gmail.com" // Substitua pelo seu email
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://wa.me/5571999348625" // Substitua com seu número de WhatsApp
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
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
