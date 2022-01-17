
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body,html {
		width: 100%;
		height: 100vh;
		background: #fff;
		color: #000;
		font-size: 17px;
		font-family: 'Roboto', sans-serif;
		overflow-x: hidden;
	}

	section{	
		padding: 6em 0;
		display: flex;
		flex-direction: column;
		grid-gap: 8em;

		@media(max-width: ${({theme}) => theme.mobile}) {
			grid-gap: 5em;
			padding: 5em 0;
		}
		@media(max-width: ${({theme}) => theme.smallerDevices}) {
			padding: 3.7em 0;
			grid-gap: 3.7em;
		}
	}

	img{
		width: 100%;
		object-fit: cover;
	}

	p {
		opacity: 0.7
	}

`

export default GlobalStyles