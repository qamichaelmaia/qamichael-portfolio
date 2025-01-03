import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/port-perfil.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
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

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* Adicionando Tilt com configurações personalizadas */}
              <Tilt
                tiltMaxAngleX={20}  // Ângulo máximo de inclinação no eixo X
                tiltMaxAngleY={20}  // Ângulo máximo de inclinação no eixo Y
                perspective={1000}  // A distância de perspectiva
                transitionSpeed={300}  // A velocidade de transição
                scale={1.1}  // O fator de escala da imagem ao fazer tilt
                className="tilt-effect"  // Adiciona uma classe personalizada para possíveis estilos
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                />
              </Tilt>
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