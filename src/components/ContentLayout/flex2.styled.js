import styled from 'styled-components'


export const Flex2 = styled.div`

	width: 70%;
	padding: 1.5em;

	h2 {
		font-size: 120%;
		margin-bottom: .5em;
	}

	p{
		margin-top: 1.5em;
		opacity: 0.7;
		height: 35px;
		overflow-Y: hidden;
		border: 0px solid red;
		font-size: 90%;
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
		padding: 1em;
		height: auto;

		p{
			font-size: 80%;
			height 2em;
			width: 100%;
		}
		h2 {
			font-size: 100%;
			margin-bottom: .5em;
		}
	}

`