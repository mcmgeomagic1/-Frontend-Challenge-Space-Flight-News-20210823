import styled from 'styled-components'


export const Flex1 = styled.div`

	width: 30%;

	img {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 100%;
		height: 19em;

		img {
				border-radius 5px  5px 0 0;
			}
	}
	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		height: 12em;
	}

`