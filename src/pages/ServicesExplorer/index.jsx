import React, { useState, useEffect } from "react";

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";

import TitleIcon from "../../assets/fire"
import SkillCardExplorer from "./SkillCardExplorer"
import Footer from "../../components/Footer";



import {
    Container,
    Header,
    TitleArea,
    Title,
    TitleText,
    Subtitle,
    SearchArea,
    SkillCardArea,
    JobsArea
} from "./styles";

import stylesList from "./stylesList";


const skills = [
    {
        iconType: "build",
        text: "Reformas",
        endpoint: "reformas"
    },
    {
        iconType: "car",
        text: "Automóvel",
        endpoint: "automovel"
    },
    {
        iconType: "cake",
        text: "Eventos",
        endpoint: "eventos"
    },
    {
        iconType: "book",
        text: "Aulas",
        endpoint: "aulas"
    },
    {
        text: "Informática",
        endpoint: "informatica"
    }
]


const ServicesExplorer = () => {

    return (
        <Container>
            <Header>
                <PerfilHeaderBird title="Rafael" />
                <HeaderOptions />
            </Header>

            <TitleArea>
                <Title>
                    <TitleText>Explorar Serviços</TitleText>
                    <TitleIcon />
                </Title>

                <Subtitle>
                    Todo tipo de trabalho te aguardando
                </Subtitle>
            </TitleArea>

            <JobsArea contentContainerStyle={stylesList.list}>
                <SkillCardArea>
                    {skills.map((skill, index) => (
                        <SkillCardExplorer
                            key={index}
                            iconType={skill.iconType}
                            text={skill.text}
                            endpoint={skill.endpoint}
                        />
                    ))}
                </SkillCardArea>
            </JobsArea>
            

            <Footer
                startSelection={1}
            />

        </Container>
    );
};

export default ServicesExplorer;

