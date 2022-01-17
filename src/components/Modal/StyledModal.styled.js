import styled from 'styled-components'


export const StyledModalBackground = styled.div`
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.8);
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;


`

export const StyledModal = styled.div`
		width: 850px;
		height: auto;
		background: #fff;
		border-radius: 5px;
		box-shadow: 3px 4px 12px rgba(0,0,0,.3);
		padding: 2em;
		

		@media(max-width: ${({theme}) => theme.mobile}) {
			width: 90%;
			padding: 0;
		}

		@media(max-width: ${({theme}) => theme.smallerDevices}) {
			width: 100%;
			height: 100%;
		}
`
export const FirstFlex = styled.div`
		display: flex;
		grid-gap: 2em;

		@media(max-width: ${({theme}) => theme.mobile}) {
			flex-direction: column;
		}
`

export const Flex1 = styled.div`
		width: 50%;
		

		img {
			width: 100%;
			height: 300px;
			border-radius: 5px;

		}

		@media(max-width: ${({theme}) => theme.mobile}) {
			width: 100%;
			img {
				border-radius 5px  5px 0 0;
			}

			@media(max-width: ${({theme}) => theme.smallerDevices}) {
				height: 22em;

				img {
					height: 100%;
				}
			}
		}
`
export const Flex2 = styled.div`
		width: 70%;

		h2 {
			font-size: 130%;
			margin-bottom: .5em;
		}

		p{
			margin-top: 1.5em;
			opacity: 0.7;
		}

		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		h5, span{
			margin-top: 1em;	
			font-size: 65%;
			padding: .5em 1em; 
			border-radius: 25px;
			/*background: rgba(48,46,83,0.5);*/
			color: rgba(0,0,0,.7);
			box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
		}
		@media(max-width: ${({theme}) => theme.mobile}) {
			width: 100%;
			padding: 0 1em 0em 1em;
		}
		
`



export const ButtonSection = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		padding: 2em 0 0 0;

		button {
			margin-top: 0;
			cursor: pointer;
		}
		@media(max-width: ${({theme}) => theme.mobile}) {
			width: 100%;
			padding: 2em 0em 2em 0em;
		}
`