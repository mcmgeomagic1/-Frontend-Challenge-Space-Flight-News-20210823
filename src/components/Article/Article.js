import {StyledArticle} from './StyledArticle.styled.js'
import {Flex1} from '../ContentLayout/flex1.styled.js'
import {Flex2} from '../ContentLayout/flex2.styled.js'
import {StyledButton} from '../Button/StyledButton.styled.js'

export default function Article({flight, openModal}) {
	return (
		<StyledArticle layout={flight.id % 2 === 0 && 'row-reverse'}>
            <Flex1>
                <img src={flight.imageUrl} alt='flightImg'/>
            </Flex1>
            <Flex2>
                <h2>{flight.title}</h2>
                <div>
                     <h5>{flight.publishedAt}</h5>
                     <span>{flight.newsSite}</span>                    
                </div>             
                <p>{flight.summary}</p>
                <StyledButton onClick={()=> openModal(flight) }>Ver mais</StyledButton>
                <br/>
            </Flex2>                
        </StyledArticle>
	)
}