import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ebacWeb from "../../Assets/Projects/automation-ebacweb.png";
import emotion from "../../Assets/Projects/emotion.png";
import ebacAppium from "../../Assets/Projects/appium-ebacshop.png";
import automationExercise from "../../Assets/Projects/automation-exercise.png";
import suicide from "../../Assets/Projects/suicide.png";
import reactApp from "../../Assets/Projects/reactnative-app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>recentes
        </h1>
        <p style={{ color: "#bdbfbe" }}>  {/* Cor cinza mais escura */}
          Aqui estão alguns projetos desenvolvidos nos últimos meses.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automationExercise}
              isBlog={false}
              title="Automation Exercise"
              description="Este projeto contém uma suíte de testes automatizados para a plataforma Automation Exercise, desenvolvidos utilizando o Cypress com a arquitetura Page Objects. A automação inclui funcionalidades como login, cadastro de cliente, adição de produtos ao carrinho, checkout e envio de mensagens de contato."
              ghLink="https://github.com/qamichaelmaia/cypress-automationexercise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactApp}
              isBlog={false}
              title="React Native App"
              description="Criação de um aplicativo simples em React Native com duas páginas principais: uma página de login fake e uma página de exibição de notificações."
              ghLink="https://github.com/qamichaelmaia/reactnative-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebacAppium}
              isBlog={false}
              title="EBAC Shop"
              description="Automação de testes de uma aplicação mobile, cobrindo o fluxo completo de login, seleção de produto e finalização de compra. O ambiente utiliza WebdriverIO, Appium, Allure Report e Android Studio."
              ghLink="https://github.com/qamichaelmaia/application-mobile-test"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebacWeb}
              isBlog={false}
              title="Automação Web com Cypress"
              description="Projeto em JavaScript utilizando Cypress para automatizar o fluxo completo de um e-commerce, incluindo login, atualização de cadastro, seleção de produto, adição ao carrinho e testes da API de cupons de desconto. Utiliza ferramentas como Faker para geração de dados, Webpack e Babel para empacotamento e transpile, e Docker para garantir um ambiente consistente."
              ghLink="https://github.com/qamichaelmaia/TCC-EBAC-QE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
