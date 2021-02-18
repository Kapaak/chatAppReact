import styled from "styled-components";
import Login from "../Login/Login";

const OnLoadWindow = styled.div`
	background-color: #279797;
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	& > p {
		margin-bottom: 3rem;
	}
	div {
		display: flex;
		align-items: center;
		padding: 0.4rem 5rem;

		&:hover {
			background-color: coral;
			cursor: pointer;
		}

		p {
			font-size: 2rem;
			font-weight: 400;
			width: 16rem;
		}

		img {
			width: 7rem;
		}
	}
`;

const InitialLoad = ({ onLoad, setOnLoad, loginList, setActiveLogin }) => {
	return (
		<>
			{onLoad ? (
				<OnLoadWindow>
					<p>Choose your login</p>
					{loginList.map((el, index) => {
						return (
							<Login
								login={el}
								setActiveLogin={setActiveLogin}
								key={index}
								setIsActive={setOnLoad}
								isActive={onLoad}
							/>
						);
					})}
				</OnLoadWindow>
			) : null}
		</>
	);
};

export default InitialLoad;
