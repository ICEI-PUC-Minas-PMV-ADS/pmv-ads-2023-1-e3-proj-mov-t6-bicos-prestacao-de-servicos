import React, { useState, useMemo } from "react";
import axios from "axios";

import PerfilHeaderBird from "../../components/PerfilHeaderCard";
import HeaderOptions from "../../components/HeaderOptions";

import AddWorkButton from "../../components/AddWorkButton";
import TitleIcon from "../../assets/fire"
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
	JobsArea,
} from "./styles";

import stylesList from "../Home/stylesList";
const HomeContractor = () => {

	const [lastFilter, setLastFilter] = useState(3)

	const [isLoading, setIsLoading] = useState(true);

	const [contractor, setContractor] = useState(1)

	const [jobs, setJobs] = useState([]);


	const getJobsPerCategory = async (
			endpoint
			
		) => {
			console.log(`https:my-json-server.typicode.com/cxxlt/bicos/jobs?${endpoint}`)
		const response = await axios.get(
				`https:my-json-server.typicode.com/cxxlt/bicos/jobs?${endpoint}&contratante=${contractor}`
			)
		return response.data
	}

	const getJobs = async (endpoint) => {
		setIsLoading(true)
		const response = await getJobsPerCategory(endpoint);
		setJobs(response)
		setIsLoading(false)
	}

	useMemo(() => {

		let endpointFilter = "";

		if(lastFilter === 0) {

			endpointFilter = `&situacao=aberto`

		} else if(lastFilter === 1) {

			endpointFilter = `&situacao=fechado`

		} else if(lastFilter === 2) {

			endpointFilter = ``

		} else {

			endpointFilter=``

		}
		getJobs(endpointFilter);

	}, [lastFilter])

	return (
		<Container>
			<Header>
				<PerfilHeaderBird 
                    title="João Silva" 
                    isContractor={true}
                />
				<HeaderOptions isContractor={true}/>
			</Header>

			<TitleArea>
				<Title>
					<TitleText>Publique</TitleText>
					<TitleIcon />
				</Title>

				<Subtitle>
					Trabalhadores qualificados por toda parte
				</Subtitle>
			</TitleArea>

            <AddWorkButton text="Incluir Serviço" />

            <TopicsList 
				startSelection={2}
				onActive={setLastFilter}
				topics={
					[
						{
							key: 0,
							text: "Em aberto"
						},
						{
							key: 1,
							text: "Fechados"
						},
						{
							key: 2,
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
								isContractor={true}
								key={index}
								id={index}
								title={job.descricao} 
								imageUrl={job.imageUrl}
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
				isContractorFooter={true}
			/>

		</Container>
	);
};

export default HomeContractor;