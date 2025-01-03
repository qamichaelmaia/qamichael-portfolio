import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card 
      className="project-card-view" 
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}  // Adiciona fundo mais escuro
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Botões GitHub */}
        <Button variant="primary" href={props.ghLink} target="_blank" className="mt-auto">
          <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}

        {/* Botão Demo, se existir */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <CgWebsite /> &nbsp; {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
