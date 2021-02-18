import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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
	svg {
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}
`;
const comment = ({ response, userData, el, setUserData }) => {
	const removeHandler = () => {
		const newUserData = [...userData];
		const getIndex = newUserData.findIndex(element => element === el);

		const del = newUserData[getIndex].responses.filter(
			resp => resp !== response
		);
		newUserData[getIndex].responses = del;

		setUserData(newUserData);
	};
	return (
		<TweetComment>
			<img src={response.avatar} alt={response.name} />
			<div>
				<p>{response.name}</p>
				<p>{response.response}</p>
			</div>
			<FontAwesomeIcon icon={faTimes} onClick={removeHandler} />
		</TweetComment>
	);
};

export default comment;
