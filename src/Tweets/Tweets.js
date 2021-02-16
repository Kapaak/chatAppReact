import Tweet from "../Tweet/Tweet";
import styled from "styled-components";
const TweetsStyle = styled.div`
	max-width: 80rem;
	width: 100%;
	margin: auto;
`;
const tweets = ({ userData, setUserData, login }) => {
	return (
		<TweetsStyle>
			{userData.map(el => {
				return (
					<Tweet
						login={login}
						el={el}
						setUserData={setUserData}
						userData={userData}
						key={el.id}
					/>
				);
			})}
		</TweetsStyle>
	);
};

export default tweets;
