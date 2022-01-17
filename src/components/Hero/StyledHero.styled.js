import styled from 'styled-components'

export const StyledHero = styled.div`
	width: 100%;
	height: 39vh;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;

	div {
		width: 90px;
		height: 90px;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		box-shadow: 4px 4px 12px rgba(0,0,0,.2);
		margin-bottom: 1em;
		
		

		img {
			width: 60%;
		}

	}

	h1 {
		font-weight: bold;
	}

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		h1 {
			font-size: 170%;
		}
	}

	
`