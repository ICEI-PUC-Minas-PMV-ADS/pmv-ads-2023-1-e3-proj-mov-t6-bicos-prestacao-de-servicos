import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";

import TitleIcon from "../../assets/fire"
import SearchBar from "../../components/SearchBar"
import SearchButton from "../../components/SearchButton"
import SkillCard from "../../components/SkillCard"
import TopicsList from "../../components/TopicsList";
import JobCard from "../../components/JobCard";


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

const Home = () => {

	const [buildFilter, setBuildFilter] = useState(false);
	const [carFilter, setCarFilter] = useState(false);
	const [cakeFilter, setCakeFilter] = useState(false);
	const [bookFilter, setBookFilter] = useState(false);
	const [informaticsFilter, setInformaticsFilter] = useState(false);

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
{/* 
			<JobsArea>
				<JobCard />
				<JobCard />
				<JobCard />
			</JobsArea> */}

		</Container>
	);
};

export default Home;

