import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";

import ConfigIcon from "../../assets/configs"
import TitleIcon from "../../assets/fire"
import Footer from "../../components/Footer";

import SearchIcon from "../../assets/search";

import {
	Container,
	Header,
	TitleArea,
	Title,
	TitleText,
	Subtitle,
	SearchArea,
	SkillCardArea,
	JobsArea,
	SvgController,
	SearchInput,
	InputContainer,
	SearchButton,
	SearchButtonText,
} from "./styles";

import stylesList from "./stylesList";
import axios from "axios";
import JobCard from "./JobCard";


const getJobs = async (endpoint) => {
	const response = await axios.get(`https://my-json-server.typicode.com/cxxlt/bicos/jobs?categoria=${endpoint}`)
	return response.data
}


const ServicesExplorer = (props) => {
	const route = useRoute();
	const { endpoint, text } = route.params.setFilter;

	const [input, setInput] = useState("");

	const [jobs, setJobs] = useState([]);



	const handleSearchJob = async (input) => {
		let response;

		if (input === "" || input === null) {
			response = await getJobs(endpoint);
			return setJobs(response)
		} else {
			response = await axios.get(`https://my-json-server.typicode.com/cxxlt/bicos/jobs?categoria=${endpoint}&q=${input}`)
		}

		return setJobs(response.data)
	}



	useEffect(() => {
		const jobs = async () => {
			const response = await getJobs(endpoint);
			setJobs(response);
		}
		jobs();
	}, []);

	return (
		<Container>
			<Header>
				<PerfilHeaderBird title="Rafael" />
				<HeaderOptions />
			</Header>

			<TitleArea>
				<Title>
					<TitleText>Buscar por {text}</TitleText>
					<TitleIcon />
				</Title>

				<Subtitle>
					Encontre os melhores profissionais para o que você precisa
				</Subtitle>
			</TitleArea>

			<SearchArea>
				<InputContainer>
					<SvgController>
						<SearchIcon />
					</SvgController>

					<SearchInput placeholder="Pesquisar..." value={input} onChangeText={setInput} />
				</InputContainer>

				<SearchButton onPress={() => handleSearchJob(input)}>
					<SearchButtonText>
						<ConfigIcon />
					</SearchButtonText>
				</SearchButton>
			</SearchArea>

			<JobsArea contentContainerStyle={stylesList.list}>
				{jobs.map((job) => (
					<JobCard
						key={job.id}
						descricao={job.descricao}
						preco={job.preco}
						created_at={job.created_at}
					/>
				))}
			</JobsArea>


			<Footer 
				startSelection={1}
			/>

		</Container>
	);
};

export default ServicesExplorer;

