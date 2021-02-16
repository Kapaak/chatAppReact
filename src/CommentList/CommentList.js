import Comment from "../Comment/Comment";
const CommentList = ({ login, el, userData }) => {
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
						return <Comment response={response} login={login} key={index} />;
				  })
				: null}
		</div>
	);
};

export default CommentList;
