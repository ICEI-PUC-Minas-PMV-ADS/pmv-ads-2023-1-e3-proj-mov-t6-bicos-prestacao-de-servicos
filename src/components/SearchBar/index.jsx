import SearchIcon from "../../assets/search";

import {
	Container,
    SvgController
} from "./styles";


const SearchBar = (props) => {

	return (
		<Container>
            <SvgController>
                <SearchIcon />
            </SvgController>
            {props.children}
		</Container>
	);
};

export default SearchBar;
