import React, { useState, useMemo } from "react";
import axios from "axios";

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";

import TitleIcon from "../../assets/fire"
import SearchBar from "../../components/SearchBar"
import SkillCard from "../../components/SkillCard"
import TopicsList from "../../components/TopicsList";
import JobCard from "../../components/JobCard";
import Loading from "../../components/Loading";
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
	SearchInput,
	SearchButton
} from "./styles";

import stylesList from "./stylesList";
import ConfigIcon from "../../assets/configs"

const Home = () => {

	const [buildFilter, setBuildFilter] = useState(false);
	const [carFilter, setCarFilter] = useState(false);
	const [cakeFilter, setCakeFilter] = useState(false);
	const [bookFilter, setBookFilter] = useState(false);
	const [informaticsFilter, setInformaticsFilter] = useState(false);

	const [lastFilter, setLastFilter] = useState(3)
	const [endpointString, setEndpointString] = useState("")
	const [filter, setFilter] = useState("")
	const [isLoading, setIsLoading] = useState(true);
	const [input, setInput] = useState("");
	const [jobs, setJobs] = useState([]);


	const getJobsPerCategory = async (
			endpointName,
			endpointFilters,
			endpointCategory
		) => {
		const response = await axios.get(
				`https:my-json-server.typicode.com/cxxlt/bicos/jobs?situacao=aberto&q=${endpointName}${endpointFilters}${endpointCategory}`
			)
		return response.data
	}

	const getJobs = async (inputEndpoint, filterEndpoint, mainEndpoint) => {
		setIsLoading(true)
		const response = await getJobsPerCategory(inputEndpoint, filterEndpoint, mainEndpoint);
		setJobs(response)
		setIsLoading(false)
	}

	useMemo(() => {

		let endpointBuild = endpointString;

		if(buildFilter === true) {
			endpointBuild += "&categoria=reformas"
			getJobs(input, filter, endpointBuild);
		} else if (buildFilter === false && endpointString !== "") {
			endpointBuild = endpointString.replace("&categoria=reformas", "")
			getJobs(input, filter, endpointBuild);
		}

		setEndpointString(endpointBuild)


	}, [buildFilter])

	useMemo(() => {

		let endpointCar = endpointString;

		if(carFilter === true) {
			endpointCar += "&categoria=automovel"
			getJobs(input, filter, endpointCar);
		} else if (carFilter === false && endpointString !== "") {
			endpointCar = endpointString.replace("&categoria=automovel", "")
			getJobs(input, filter, endpointCar);
		}

		setEndpointString(endpointCar)

	}, [carFilter])

	useMemo(() => {

		let endpointBook = endpointString;

	 	if(bookFilter === true) {
			endpointBook += "&categoria=aulas"
			getJobs(input, filter, endpointBook);

	 	} else if (bookFilter === false && endpointString !== "") {
			endpointBook = endpointString.replace(`&categoria=aulas`, "")
			getJobs(input, filter, endpointBook);

		}

		setEndpointString(endpointBook)


	}, [bookFilter])

	useMemo(() => {

		let endpointInformatic = endpointString;

		if(informaticsFilter === true) {
			endpointInformatic += "&categoria=informatica"
			getJobs(input, filter, endpointInformatic)
		} else if (informaticsFilter === false && endpointInformatic !== "") {
			endpointInformatic = endpointString.replace(`&categoria=informatica`, "")
			getJobs(input, filter, endpointInformatic)
		}

		setEndpointString(endpointInformatic)

	}, [informaticsFilter])

	useMemo(() => {

		let endpointCake = endpointString;

		if(cakeFilter === true) {
			endpointCake += "&categoria=eventos"
			getJobs(input, filter, endpointCake)
		} else if (cakeFilter === false && endpointString !== "") {
			endpointCake = endpointString.replace(`&categoria=eventos`, "")
			getJobs(input, filter, endpointCake)
		}

		setEndpointString(endpointCake)

	}, [cakeFilter])


	useMemo(() => {

		let endpointFilter = "";

		if(lastFilter === 0) {

			const date = new Date();
			const today = date.toLocaleDateString("pt-BR")

			endpointFilter = `&created_at=${today}`

		} else if(lastFilter === 1) {

			endpointFilter = `&candidatos=4`

		} else if(lastFilter === 2) {

			endpointFilter = `&verificado=sim`

		} else {

			endpointFilter=``

		}
		setFilter(endpointFilter)
		getJobs(input, endpointFilter, endpointString);

	}, [lastFilter])

	useMemo(() => {

		if(endpointString === "" && filter === "" && input === "") {
			getJobs(input, filter, endpointString)
		}

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
				<SearchBar>
					<SearchInput 
						placeholder={"Pesquisar..."}
						value={input} 
						onChangeText={setInput}
					/>
				</SearchBar>

				<SearchButton onPress={
					async () => {
						const response = await getJobsPerCategory(input, filter, endpointString);
						setJobs(response)
					}
				}>
            		<ConfigIcon />
				</SearchButton>

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
				startSelection={3}
				onActive={setLastFilter}
				topics={
					[
						{
							key: 0,
							text: "Hoje"
						},
						{
							key: 1,
							text: "Candidatados"
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
			<JobsArea contentContainerStyle={stylesList.list}>

				{isLoading ? (
					<Loading />
				) : (
					<>
						{jobs.map((job, index) => (
							<JobCard 
								key={index}
								id={index}
								title={job.descricao} 
								imageUrl={job.imageUrl}
								apresentation={job.apresentacao}
								price={job.preco}
								kmDistance={job.distancia_km}
								verified={job.verificado}
							/>
						))}
					</>
				)}

			</JobsArea>

			<Footer 
				startSelection={0}
					
			/>

		</Container>
	);
};

export default Home;


