import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

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
	JobsArea,
} from "./styles";

import stylesList from "./stylesList";

const Home = () => {

	const navigation = useNavigation();
	
	const handleToPerfilPage = useCallback(() => {
		navigation.navigate("PerfilPage");
	}, []);

	const [buildFilter, setBuildFilter] = useState(false);
	const [carFilter, setCarFilter] = useState(false);
	const [cakeFilter, setCakeFilter] = useState(false);
	const [bookFilter, setBookFilter] = useState(false);
	const [informaticsFilter, setInformaticsFilter] = useState(false);

	return (
		<Container>
			<Header>
				<Pressable onPress={handleToPerfilPage}>
					<PerfilHeaderBird title="Gabriel" />
				</Pressable>
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

				<JobCard 
					title={"Pedreiro Experiente"} 
					imageUrl={"https://th.bing.com/th/id/R.020cc1e31ab2012c21d3bf221899de33?rik=dMWiuCUwQVK8%2bg&pid=ImgRaw&r=0"}
					price={10}
					kmDistance={24}
				/>

				<JobCard 
					title={"Mecânico Pegeout"} 
					imageUrl={"https://img.estadao.com.br/resources/jpg/6/5/1511721627356.jpg"}
					price={35}
					kmDistance={5}
				/>

				<JobCard 
					title={"Cortar grama"} 
					imageUrl={"https://th.bing.com/th/id/R.9bcf196063fd75070577c53cf363ff99?rik=7XXoJUJAw4TclA&pid=ImgRaw&r=0"}
					price={27}
					kmDistance={12}
				/>
				
			</JobsArea>

			<Footer 
				startSelection={0}

			/>

		</Container>
	);
};

export default Home;

