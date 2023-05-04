import SearchIcon from "../../assets/search";

import {
	Container,
    SearchInput,
    SvgController
} from "./styles";


const SearchBar = (props) => {

	return (
		<Container>
            <SvgController>
                <SearchIcon />
            </SvgController>

            <SearchInput placeholder={props.placeholder}/>
		</Container>
	);
};

export default SearchBar;
