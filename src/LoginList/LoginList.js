import Login from "../Login/Login";
import styled from "styled-components";
const LoginListWrapper = styled.div`
	position: absolute;
	top: 6.5rem;
	margin-right: 2rem;
	background-color: #279797;

	overflow: hidden;
	div,
	h1 {
		padding: 1rem 2rem;
	}
	div {
		display: flex;
		align-items: center;
		cursor: pointer;
		p {
			min-width: 13rem;
		}

		&:hover {
			background-color: coral;
		}
	}
	h1 {
		font-size: 2rem;
		font-weight: 400;
		background-color: #eaeeee;
	}
`;

const LoginList = ({ loginList, setActiveLogin, setIsActive, isActive }) => {
	return (
		<LoginListWrapper>
			<h1>Switch account</h1>
			{loginList.map((el, index) => (
				<Login
					login={el}
					setActiveLogin={setActiveLogin}
					key={index}
					setIsActive={setIsActive}
					isActive={isActive}
				/>
			))}
		</LoginListWrapper>
	);
};

export default LoginList;
