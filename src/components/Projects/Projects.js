import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ebacWeb from "../../Assets/Projects/automation-ebacweb.png";
import ebacAppium from "../../Assets/Projects/appium-ebacshop.png";
import automationExercise from "../../Assets/Projects/automation-exercise.png";
import reactApp from "../../Assets/Projects/reactnative-app.png";
import apiAutomation from "../../Assets/Projects/api-test.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">PROJETOS </strong>
        </h1>
        <p style={{ color: "#d2c0fa" }}>  {/* Cor cinza mais escura */}
          Aqui estão alguns projetos desenvolvidos nos últimos meses.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apiAutomation}
              isBlog={false}
              title="Automação de APIs"
              description="Este repositório está em construção e tem como objetivo a criação de testes automatizados exclusivos para APIs. Atualmente, estão incluídos testes para as APIs do OpenWeather e SpaceX, cobrindo funcionalidades essenciais como previsão do tempo e informações sobre lançamentos espaciais."
              ghLink="https://github.com/qamichaelmaia/api-test-automation"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebacAppium}
              isBlog={false}
              title="Automação Mobile com Appium"
              description="Automação de testes de uma aplicação mobile, cobrindo o fluxo completo de login, seleção de produto e finalização de compra. O ambiente utiliza WebdriverIO, Appium, Allure Report e Android Studio."
              ghLink="https://github.com/qamichaelmaia/application-mobile-test"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automationExercise}
              isBlog={false}
              title="Automação Web com Cypress"
              description="Automação Web para a plataforma Automation Exercise, desenvolvido utilizando o Cypress com a arquitetura Page Objects. A automação inclui funcionalidades como login, cadastro de cliente, e fluxo completo de compra"
              ghLink="https://github.com/qamichaelmaia/cypress-automationexercise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactApp}
              isBlog={false}
              title="React Native App"
              description="Desenvolvimento de aplicativo em React Native com duas páginas principais: uma página de login e uma página de exibição de notificações com consulta de APIs."
              ghLink="https://github.com/qamichaelmaia/reactnative-website"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
