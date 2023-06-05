import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native"

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";

import TitleIcon from "../../assets/fire"
import Footer from "../../components/Footer";

import {
    Container,
    Header,
    TitleArea,
    Title,
    TitleText,
    TitleTextBold,
    Subtitle,
    JobsArea,
    Button,
    TextButton
} from "./styles";

import stylesList from "./stylesList";
import axios from "axios";
import JobCard from "./JobCard";


const getUserJobs = async () => {
    const response = await axios.get(`https://my-json-server.typicode.com/cxxlt/bicos/jobs?contratante=1&situacao=aberto`)
    return response.data
}


const CreateEditServices = () => {
    const [jobs, setJobs] = useState([]);
    const navigation = useNavigation()

    useEffect(() => {
        const jobs = async () => {
            const response = await getUserJobs();
            setJobs(response);
        }
        jobs();
    }, []);

    const handleForm = useCallback(() => {
        navigation.navigate("ServicesForm", { props: 0 });
    }, [navigation]);

    return (
        <Container>
            <Header>
                <PerfilHeaderBird title="Rafael" />
                <HeaderOptions />
            </Header>

            <TitleArea>
                <Title>
                    <TitleText>Solicite seus Serviços</TitleText>
                    <TitleIcon />
                </Title>

                <Subtitle>
                    Encontre os melhores profissionais para te ajudar em qualquer situação
                </Subtitle>
            </TitleArea>

            <Button onPress={handleForm}>
                <TextButton>
                    Adicionar Serviço
                </TextButton>
            </Button>

            <Title>
                <TitleTextBold>
                    Seus Serviços solicitados
                </TitleTextBold>
            </Title>

            <JobsArea contentContainerStyle={stylesList.list}>
                {jobs.map((job, index) => (
                    <JobCard
                        key={index}
                        id={job.id}
                        title={job.descricao}
                        imageUrl={job.imageUrl}
                        price={job.preco}
                        categoria={job.categoria}
                        kmDistance={job.distancia_km}
                    />
                ))}
            </JobsArea>

            <Footer
                isContractorFooter={true}
                startSelection={0}
            />

        </Container>
    );
};

export default CreateEditServices;

