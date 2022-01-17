import {StyledHero} from './StyledHero.styled.js'

export default function Hero() {
	return(
		<StyledHero>
			<div>
				<img src={require('../../assets/rocket.png')}/>
			</div>			
			<h1>Space Flight News</h1>
		</StyledHero>
	)
}