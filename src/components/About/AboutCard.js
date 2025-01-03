import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Me chamo <span className="purple">Michael Maia </span>
            tenho 28 anos e moro no interior da <span className="purple"> Bahia.</span>
            <br />
            <br />

            Atuamente participo de projetos como Freelancer na{" "}
            <span style={{ color: "#ffa875" }}>Crowdtest</span> e sou QA Voluntário no projeto{" "}
            <span style={{ color: "#f5ec84" }}>Pipoca Ágil</span>.
            Sou formado no curso{" "}
            <span className="purple">Engenheiro de Qualidade de Software</span> na EBAC, e estou concluindo a graduação de{" "}
            <span className="purple">Análise e Desenvolvimento de Sistemas</span> pela Faculdade VINCIT.
            <br />
            <br />
            Atuei como{" "}
            <span className="purple">Designer Gráfico</span> Freelancer por 3 anos, liderando uma equipe de desenvolvimento com 8 colaboradores. Também realizei treinamentos para estagiários da área de Design e Gerenciamento de Projetos.
            <br />
            <br />
            <br />
            <span style={{ color: "#d2b8ff" }}>Além de Qualidade de Software, tenho alguns Hobbies!</span>
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ilustração Digital
            </li>
            <li className="about-activity">
              <ImPointRight /> Viagens, Trilhas e Rapel
            </li>
            <li className="about-activity">
              <ImPointRight /> Filmes e Séries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dê o seu melhor para construir coisas que possam fazer a diferença!"
          </p>
          <footer className="blockquote-footer">Michael Maia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
