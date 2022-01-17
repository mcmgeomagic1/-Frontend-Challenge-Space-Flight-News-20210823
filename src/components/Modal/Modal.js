import {StyledModalBackground, StyledModal, Flex1, Flex2, ButtonSection, FirstFlex} from './StyledModal.styled.js'
import {StyledButton} from '../Button/StyledButton.styled.js'


export default function Modal({showModal, setShowModal, flight}) {
	return(
		<>
		{
			showModal ? 
				<StyledModalBackground>
					<StyledModal>
						<FirstFlex>			
							<Flex1>
								<img src={flight.imageUrl} alt='flightImg'/>
							</Flex1>
							<Flex2>
								<h2>{flight.title}</h2>
				                <div>
				                     <h5>{flight.publishedAt}</h5>                   
				                </div>             
				                <p>{flight.summary}</p>
							</Flex2>
						</FirstFlex>
						<ButtonSection>
							<StyledButton onClick={()=> setShowModal(prev => !prev)}>Ir para o site</StyledButton>
						</ButtonSection>
					</StyledModal>
				</StyledModalBackground>
			: null
		}
		</>
	)
}