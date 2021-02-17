import Comment from "../Comment/Comment";
const CommentList = ({ login, el, userData, setUserData }) => {
	// const hasComments = () => {
	// 	if (el.responses) {
	// 		return (
	//             {el.responses.map()}
	//         )
	// 	} else null;
	// };

	// el.responses ? <p>mam response</p> : <p>nemam</p>
	// return <div>{hasComments()}</div>;

	return (
		<div>
			{el.responses
				? el.responses.map((response, index) => {
						return (
							<Comment
								response={response}
								login={login}
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
