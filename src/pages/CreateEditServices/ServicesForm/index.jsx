import React, { useState, useEffect } from "react";

import PerfilHeaderBird from "../../../components/PerfilHeaderCard";
import HeaderOptions from "../../../components/HeaderOptions";

import TitleIcon from "../../../assets/fire"
import Footer from "../../../components/Footer";

import {
    Container,
    Header,
    TitleArea,
    Title,
    TitleText,
    TitleTextBold,
    Subtitle,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    BoxInput,
    ContainerForm,
    FieldBox,
    Fields,
    Input,
} from "../../../components/FormStyles/FormStyles";
import { Button, TextButton } from "../styles";
import axios from "axios";


const ServicesForm = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params.props;

    const sendForm = async () => {
        if (id == 0) {
            await axios.post("https://my-json-server.typicode.com/cxxlt/bicos/jobs", {
                descricao,
                apresentacao,
                categoria,
                preco,
            }).then((response) => {
                console.log(response.data);
                navigation.navigate("CreateEditServices");
            }
            ).catch((error) => {
                console.log(error);
            }
            );
        } else {
            await axios.put(`https://my-json-server.typicode.com/cxxlt/bicos/jobs/${id}`, {
                descricao,
                apresentacao,
                categoria,
                preco,
            }).then((response) => {
                console.log(response.data);
                navigation.navigate("CreateEditServices");
            }
            ).catch((error) => {
                console.log(error);
            }
            );
        }

    };

    const [descricao, setDescricao] = useState("");
    const [apresentacao, setApresentacao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");

    useEffect(() => {
        if (id && id != 0) {
            const getJob = async () => {
                const response = await axios.get(`https://my-json-server.typicode.com/cxxlt/bicos/jobs/${id}`)

                setDescricao(response.data.descricao);
                setApresentacao(response.data.apresentacao);
                setCategoria(response.data.categoria);
                setPreco(response.data.preco);
            }
            getJob();
        }
    }, [id]);

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

            <ContainerForm>
                <Title>
                    <TitleTextBold>
                        {id === 0 ? "Cadastrar Serviço" : "Editar Serviço"}
                    </TitleTextBold>
                </Title>

                <Fields>
                    <FieldBox>
                        <BoxInput>
                            <Input placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
                        </BoxInput>
                    </FieldBox>

                    <FieldBox>
                        <BoxInput>
                            <Input placeholder="Apresentação" value={apresentacao} onChangeText={setApresentacao} />
                        </BoxInput>
                    </FieldBox>

                    <FieldBox>
                        <BoxInput>
                            <Input placeholder="Categoria" value={categoria} onChangeText={setCategoria} />
                        </BoxInput>
                    </FieldBox>

                    <FieldBox>
                        <BoxInput>
                            <Input placeholder="Preço" keyboardType="decimal-pad" value={preco} onChangeText={setPreco} />
                        </BoxInput>
                    </FieldBox>

                    <Button onPress={sendForm}>
                        <TextButton>
                            {id === 0 ? "Solicitar Serviço" : "Editar Serviço"}
                        </TextButton>
                    </Button>

                </Fields>
            </ContainerForm>
        </Container>
    );
};

export default ServicesForm;

