import styled from 'styled-components'
import img from '../../assets/header2.jpg'
import imgOne from '../../assets/header4.jpg'
import imgThre from '../../assets/header1.jpg'
import imgFour from '../../assets/header3.jpg'
import { keyframes } from 'styled-components'

const animate = keyframes`
	 0% { 
			background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) ,url(${img});
			background-repeat: no-repeat;
			background-size: cover;
			background-position: bottom;
		}
	 20% {
	 		background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) ,url(${imgOne});
	 		background-repeat: no-repeat;
			background-size: cover;
			background-position: top;
	 	}
	 65% { 
	 		background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) ,url(${imgThre});
	 		background-repeat: no-repeat;
			background-size: cover;
			background-position: bottom;
		 }
	 100% { 
	 		background: linear-gradient(to top, rgba(255,255,255,1), rgba(0,0,0,0.3) 25%) ,url(${imgFour});
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
	  }

`
const animateMobile = keyframes`
	 0% { 
			background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) ,url(${img});
			background-repeat: no-repeat;
			background-size: 140% 140%;
			background-position: bottom;
		}
	 40% {
	 		background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) ,url(${imgOne});
	 		background-repeat: no-repeat;
			background-size: 140% 140%;
			background-position: top;
	 	}
	 65% { 
	 		background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) ,url(${imgThre});
	 		background-repeat: no-repeat;
			background-size: 200% 200%;
			background-position: bottom;
			opacity: ;
		 }
	 100% { 
	 		background: linear-gradient(to top, rgba(255,255,255,1), rgba(0,0,0,0.3) 25%) ,url(${imgFour});
			background-repeat: no-repeat;
			background-size: 160% 150%;
			background-position: center;
	  }

`
export const StyledHeader = styled.header`
	height: 50vh;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
	padding: 1em 0;
	position: relactive;
	animation: ${animate} 20s ease-in-out infinite;

	nav {
		display: flex;
		justify-content: flex-end;
		grid-gap: 1em;
		background: rgba(255,255,255,.3);
		backdrop-filter: blur(14px);
		padding: .5em 1em;
		border-radius: 5px;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		animation: ${animateMobile} 20s ease-in-out infinite;
	}

	

`