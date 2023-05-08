import React, { useState, useEffect } from "react";
import axios from "axios";

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";

import TitleIcon from "../../assets/fire"
import SearchBar from "../../components/SearchBar"
import SearchButton from "../../components/SearchButton"
import SkillCard from "../../components/SkillCard"
import TopicsList from "../../components/TopicsList";
import JobCard from "../../components/JobCard";
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

const Home = () => {

	const [buildFilter, setBuildFilter] = useState(false);
	const [carFilter, setCarFilter] = useState(false);
	const [cakeFilter, setCakeFilter] = useState(false);
	const [bookFilter, setBookFilter] = useState(false);
	const [informaticsFilter, setInformaticsFilter] = useState(false);

	const [input, setInput] = useState("");

	const [jobs, setJobs] = useState([]);

	const getAllJobs = async () => {
		const response = await axios.get(`https://my-json-server.typicode.com/cxxlt/bicos/jobs`)
		return response.data
	}

	useEffect(() => {
		const jobs = async () => {
			const response = await getAllJobs();
			setJobs(response);
		}
		jobs();
	}, []);

	

	return (
		<Container>
			<Header>
				<PerfilHeaderBird title="Gabriel" />
				<HeaderOptions />
			</Header>

			<TitleArea>
				<Title>
					<TitleText>Encontre</TitleText>
					<TitleIcon />
				</Title>

				<Subtitle>
					Todo tipo de trabalho te aguardando
				</Subtitle>
			</TitleArea>

			<SearchArea>
				<SearchBar placeholder="Pesquisar..." />
				<SearchButton />
			</SearchArea>

			<JobsArea contentContainerStyle={stylesList.list}>

				<SkillCardArea>	

					<SkillCard 
						iconType="build" 
						text="Reformas" 
						onClick={setBuildFilter}
					/>

					<SkillCard 
						iconType="car"  
						text="Automóvel" 
						onClick={setCarFilter}
					/>

					<SkillCard 
						iconType="cake" 
						text="Eventos" 
						onClick={setCakeFilter}
					/>

					<SkillCard 
						iconType="book" 
						text="Aulas" 
						onClick={setBookFilter}
					/>

					<SkillCard 
						text="Informática" 
						onClick={setInformaticsFilter}
					/>

				</SkillCardArea>

				<TopicsList 
					startSelection={3}
					topics={
						[
							{
								key: 0,
								text: "Mais visitados"
							},
							{
								key: 1,
								text: "Bem avaliados"
							},
							{
								key: 2,
								text: "Verificados"
							},
							{
								key: 3,
								text: "Todos"
							}
						]
					}
				/>


				{jobs.map((job, index) => (
					<JobCard 
						key={index}
						id={index}
						title={job.descricao} 
						imageUrl={job.imageUrl}
						price={job.preco}
						categoria={job.categoria}
						kmDistance={24}
					/>
				))}

				
			</JobsArea>

			<Footer 
				startSelection={0}
					
			/>

		</Container>
	);
};

export default Home;


