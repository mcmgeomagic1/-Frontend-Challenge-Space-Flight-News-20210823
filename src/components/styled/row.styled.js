import styled from 'styled-components'

export const Row = styled.div`
	width: 900px;
	margin: 0 auto;

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 85%;
	}
`