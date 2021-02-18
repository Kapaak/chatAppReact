import Comment from "../Comment/Comment";
const CommentList = ({ el, userData, setUserData }) => {
	return (
		<div>
			{el.responses
				? el.responses.map((response, index) => {
						return (
							<Comment
								response={response}
								userData={userData}
								key={index}
								el={el}
								setUserData={setUserData}
							/>
						);
				  })
				: null}
		</div>
	);
};

export default CommentList;
