import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // Substitua os textos abaixo pelas suas áreas de atuação ou interesses
          "QA",
          "Quality Assurance",
          "Analista de Testes",
          "Freelancer",
          "QA Voluntário",
          "Contribuidor Open Source",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
