import styled from "styled-components";
import LoginList from "../LoginList/LoginList";
import React, { useState } from "react";

const LoginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0.5rem 0;
	position: fixed;
	z-index: 10;
	width: 100%;
	img,
	p {
		margin-right: 1rem;
	}
	img {
		width: 5rem;
		cursor: pointer;
	}
	p {
		font-size: 1.8rem;
	}
`;

const ActiveLogin = ({ login, loginList, setActiveLogin }) => {
	const [isActive, setIsActive] = useState(false);
	const activate = () => {
		if (isActive)
			return (
				<LoginList
					loginList={loginList}
					setActiveLogin={setActiveLogin}
					setIsActive={setIsActive}
					isActive={isActive}
				/>
			);
		if (!isActive) return null;
	};
	return (
		<LoginWrapper>
			<p>{login.name}</p>
			<img src={login.avatar} alt="" onClick={() => setIsActive(!isActive)} />
			{activate()}
		</LoginWrapper>
	);
};

export default ActiveLogin;
