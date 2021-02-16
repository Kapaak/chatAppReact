import styled from "styled-components";
const TweetComment = styled.div`
	display: flex;
	margin-top: 3rem;
	img {
		margin-right: 1.5rem;
		width: 4rem;
	}

	div {
		width: 20rem;
		p {
			font-size: 1.6rem;
		}
	}
`;
const comment = ({ response, login }) => {
	return (
		<TweetComment>
			<img src={login.avatar} />
			<div>
				<p>{login.name}</p>
				<p>{response}</p>
			</div>
		</TweetComment>
	);
};

export default comment;
