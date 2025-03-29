import React from "react";
import Card from "react-bootstrap/Card";
import { CgWorkAlt } from "react-icons/cg";

function SectionTitle({
    company,
    position,
    startDate,
    endDate,
    description,
    Icon,
}) {
    const formatDate = (date) => {
        const months = [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
        ];
        const d = new Date(date);
        return `${months[d.getMonth()]} ${d.getFullYear()}`;
    };

    return (
        <div style={{ marginBottom: "15px" }}>
            <h4
                style={{
                    color: "#C770F0",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 0,
                    flexWrap: "wrap", // Para que os itens se ajustem em telas pequenas
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    {Icon && (
                        <Icon
                            style={{
                                color: "#7088E1",
                                fontSize: "1.5rem",
                                marginRight: "8px",
                            }}
                        />
                    )}
                    <span style={{ color: "#C770F0", fontSize: "1.1rem" }}>
                        {position}
                    </span>
                    <span
                        style={{
                            color: "#adbdf7",
                            marginLeft: "8px",
                            fontSize: "1rem",
                        }}
                    >
                        ({company})
                    </span>
                </div>
                <span
                    style={{
                        color: "#adbdf7",
                        fontSize: "0.8rem",
                    }}
                >
                    {startDate && (
                        <>
                            {formatDate(startDate)}{" "}
                            {endDate
                                ? `- ${formatDate(endDate)}`
                                : "- no momento"}
                        </>
                    )}
                </span>
            </h4>
            <p
                style={{
                    textAlign: "justify",
                    fontSize: "1rem",
                    color: "#ffffff",
                    margin: "5px 0 0",
                    lineHeight: "1.5", // Aumenta o espaçamento entre linhas
                }}
            >
                {description}
            </p>
        </div>
    );
}

function ExperienceCard() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: "20px",
                flexWrap: "wrap", // Garante que os elementos se ajustem na tela
                maxWidth: "100%",
            }}
        >
            <Card
                className="quote-card-view"
                style={{
                    backgroundColor: "#1c1e21",
                    border: "5px solid #6c63ff",
                    padding: "20px",
                    borderRadius: "15px",
                    boxShadow: "0px 5px 15px rgba(197, 98, 255, 0.5)",
                    marginBottom: "20px",
                    width: "100%",
                    maxWidth: "800px",
                }}
            >
                <Card.Body>
                    <SectionTitle
                        company="Pris"
                        position="Quality Assurance"
                        startDate="2025-01-13"
                        endDate="2025-04-01"
                        description="Atuei no desenvolvimento de projetos voltados para produtos de Remuneração Variável e Incentivo de Longo Prazo (ILP), utilizando Scrum e Metodologias Ágeis..

                        Minhas principais atividades incluíram:
                        • Automação de testes (Web, Mobile e API)
                        • Testes de API
                        • Testes exploratórios
                        • Testes em banco de dados
                        • Testes funcionais e de confirmação
                        • Testes de regressão e performance
                        • Criação de cenários e casos de teste

                        Utilizei pipelines de CI/CD com Azure DevOps e ferramentas como ClickUp e Qase para o gerenciamento de projetos e testes, garantindo a qualidade e usabilidade das funcionalidades do produto principal da empresa."
                        Icon={CgWorkAlt}
                    />
                    <SectionTitle
                        company="Crowdtest"
                        position="Analista de Testes"
                        startDate="2024-10-10"
                        endDate={null}
                        description="Foram conduzidos testes de automatizados e testes manuais, registrando bugs e contribuído para o aprimoramento contínuo dos processos de teste. Alguns dos projetos feitos foram o Serasa e o site Meu Patrocíno."
                        Icon={CgWorkAlt}
                    />
                    <SectionTitle
                        company="Pipoca Ágil"
                        position="Quality Assurance"
                        startDate="2024-10-10"
                        endDate={null}
                        description="Sou voluntário em um projeto de aplicativo na área da saúde, utilizando o modelo Scrum e Metodologias Ágeis garantindo a qualidade e usabilidade das funcionalidades relacionadas à saúde, incluindo testes estáticos e testes dinâmicos, para a garantia da conformidade com os padrões regulatórios."
                        Icon={CgWorkAlt}
                    />
                    <SectionTitle
                        company="Freelancer"
                        position="Designer Gráfico"
                        startDate="2022-09-01"
                        endDate="2024-10-01"
                        description="Atuei em projetos de publicidade, design gráfico e desenvolvimento de layout para sites e redes sociais. Liderei uma equipe de 8 colaboradores, estando à frente na gestão de projetos, melhoria na comunicação da equipe e também realizei treinamentos à estagiários para as áreas de design e gestão de projetos."
                        Icon={CgWorkAlt}
                    />
                </Card.Body>
            </Card>
        </div>
    );
}

export default ExperienceCard;
