import styled from 'styled-components'

export const StyledInput = styled.input`
		padding: .7em 2.7em .7em .7em;
		background: rgba(0,0,0,0.3);
		border: 0;
		border-radius: 5px;
		width: 100%;
		color: #fff;

`

export const StyledInputDiv = styled.div`
		width: 40%;
		display: flex;
		float: right;
		align-items: center;
		grid-gap: 1.3em;

		Img {
			width: 1em;
			height: 1em;
			margin-left: -3.3em;
		}


		@media(max-width: ${({theme}) => theme.mobile}) {
			width: 100%;
		}
	
`

export const StyledSort = styled.select`
	border: 1px solid #fff;
	border-raius: -5px;
	width: 100px;
	padding: .5em;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	color: #fff;
	background: transparent;
`

export const StyledOption = styled.option`
	border: 1px solid #fff;
	border-raius: -5px;
	width: 100px;
	padding: .5em;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	color: #000;
	background: transparent;
`