import React from "react";
import Card from "react-bootstrap/Card";
import { FaCode, FaCogs, FaDatabase, FaProjectDiagram, FaLanguage, FaTools } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";

function SectionTitle({ title, description, Icon }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <h4
        style={{
          color: "#C770F0",
          fontWeight: "bold",
          fontSize: "1.2rem", // Tamanho reduzido
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: 0,
        }}
      >
        {Icon && <Icon style={{ color: "#7088E1", fontSize: "1.5rem" }} />}
        {title}
      </h4>
      <p style={{ textAlign: "justify", fontSize: "1rem", color: "#ffffff", margin: "5px 0 0" }}>
        {description}
      </p>
    </div>
  );
}

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        backgroundColor: "#1c1e21", // Cor de fundo escura
        border: "5px solid #6c63ff", // Borda destacada com roxo
        padding: "20px",
        borderRadius: "15px", // Bordas mais arredondadas
        boxShadow: "0px 5px 15px rgba(197, 98, 255, 0.5)", // Sombra mais pronunciada
        color: "#ffffff", // Texto branco para contraste
        width: "100%", // Garantir que ocupe toda a largura disponível
      }}
    >
      <Card.Body>
        {/* Primeira seção: Qualificações técnicas */}
        <SectionTitle
          title="Linguagens de Programação"
          description="Javascript, Python, React, Typescript, Java, Ruby, C# e .Net."
          Icon={FaCode}
        />
        <SectionTitle
          title="Automação de Testes"
          description="Cypress, Playwright, Selenium e Robot Framework."
          Icon={FaCogs}
        />
        <SectionTitle
          title="Tipos de Teste"
          description="Testes automatizados (Web e Mobile), testes exploratórios, testes de unidade, testes funcionais, testes não funcionais, testes de manutenção e testes baseados em risco."
          Icon={MdOutlineDevices}
        />
        <SectionTitle
          title="Desenvolvimento"
          description="React, Visual Studio Code, Android Studio e IntelliJ."
          Icon={FaCode}
        />
        <SectionTitle
          title="Pipelines CI/CD"
          description="Azure DevOps, GitLab, Jenkins e GitHub Actions."
          Icon={FaTools}
        />
        <SectionTitle
          title="Testes de API"
          description="Postman, Swagger, GraphQL e Cypress Crud."
          Icon={FaTools}
        />
        <SectionTitle
          title="Banco de Dados"
          description="SQL Server, NoSQL, MySQL e MongoDB."
          Icon={FaDatabase}
        />
        <SectionTitle
          title="Metodologias Ágeis"
          description="Scrum, Kanban e Waterfall."
          Icon={FaProjectDiagram}
        />
        <SectionTitle
          title="Gestão de Projetos"
          description="ClickUp, Jira, Trello, Qase."
          Icon={FaProjectDiagram}
        />
        <SectionTitle
          title="Idiomas"
          description="Inglês Nível B1 (pré-intermediário)."
          Icon={FaLanguage}
        />
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
