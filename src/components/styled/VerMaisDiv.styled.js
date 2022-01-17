import styled from 'styled-components'

export const VerMaisDiv = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -3em;

		button {
			background: transparent;
			border: 1px solid black;
			color: #000;
			opacity: 0.7;
			margin: 0;
		}

		@media(max-width: ${({theme}) => theme.mobile}) {
			margin-top: 0;
		}
`