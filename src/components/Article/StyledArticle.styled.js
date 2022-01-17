import styled from 'styled-components'

export const StyledArticle = styled.div`
	width: 100%;
	height: 260px;
	display: flex;
	flex-direction: ${({layout}) => layout || 'row'};
	box-shadow: 3px 4px 12px rgba(0,0,0,0.1);
	background: #fff;
	transition: .5s all;

	&&:hover {
		transform: scale(1.025);
		cursor: pointer;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		flex-direction: column;
		height: 530px;
	}

	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		height: 460px;
	}

`