import {Row} from '../styled/row.styled.js'
import {StyledHeader} from './StyledHeader.styled.js'
import SearchInput from '../SearchInput/SearchInput.js'
import Hero from '../Hero/Hero.js'


export default function Header({searchText, setSearchText, sortBy}) {
	return (
		<StyledHeader>
			<Row>
				<nav>
					<SearchInput value={searchText} onChange={(text) => setSearchText(text)} sortBy={sortBy}/>								
				</nav>
				<Hero/>
			</Row>
		</StyledHeader>
	)
}