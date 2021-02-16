import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faComment,
	faSave,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import CommentList from "../CommentList/CommentList";

const fadeInAnimation = keyframes`
 0% { 
	opacity:0;
	width:0;
  }
 10% {
	 opacity:.5;
	 }
 100% { 
	opacity:1;
	width:100%
 }
`;
const fadeOutAnimation = keyframes`
 0% { 
	opacity:1;
	width:100%
  }
 100% { 
	opacity:0;
	width:0;
 }
`;

const TweetWrapper = styled.div`
	position: relative;
	padding: 2rem;
	margin-bottom: 4rem;
	background-color: #d2d2d2;
	transition: all 0.5s ease;
	&:last-of-type {
		margin-bottom: 0rem;
	}

	&:hover {
		transition: all 0.5s ease;
		background-color: #f6f6f6;
		&::before {
			animation: ${fadeInAnimation} 0.5s ease forwards;
		}
	}

	&::before {
		content: "";
		top: 0.2rem;
		left: 0;
		position: absolute;
		background-color: f0f0f0;
		border: 3px solid red;
		width: 0;
		height: 100%;
		z-index: -1;
		opacity: 0;
		animation: ${fadeOutAnimation} 0.5s ease forwards;
	}
`;
const TweetHeader = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 4.5rem;
		margin-right: 1.5rem;
	}
	h2 {
		font-size: 1.4rem;
		font-weight: 400;
	}
`;
const TweetBody = styled.div`
	h3,
	h4 {
		font-weight: 400;
	}
	h3 {
		font-family: "Lato", sans-serif;
		font-size: 3.5rem;
		margin: 0.5rem 0 1rem 0;
	}
	h4 {
		font-size: 2rem;
	}
`;

const TweetActions = styled.div`
	display: flex;
	align-items: center;
	margin: 0.5rem 0;
	svg {
		cursor: pointer;
		height: 1.8rem;
		width: 1.8rem;
	}

	p {
		margin-left: 1.5rem;
		font-size: 1.9rem;
	}
`;

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
			font-size: 2rem;
		}
		div {
			button,
			input {
				border: none;
				outline: none;
				background-color: transparent;
				padding: 1rem 0;
				border-bottom: 1px solid black;
			}
			input {
				/* width: 12rem; */
				/* transition: all 0.2s ease;

				&:focus {
					width: 17rem;
					transition: all 0.3s ease;
				} */
			}
			button {
				cursor: pointer;
				padding: 1rem 0.5rem;
			}
		}
	}
`;

const Tweet = ({ login, el, setUserData, userData }) => {
	const [like, setLike] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [showComment, setShowComment] = useState(false);
	const inputRef = useRef(null);

	const likeHandler = () => {
		setLike(!like);
		let likes = el.likes;
		if (!like) likes++;
		else likes--;
		const newUpdate = userData.map(user => {
			if (user === el) {
				return {
					...user,
					likes: likes,
					// saved: true,
				};
			} else return { ...user };
		});
		setUserData(newUpdate);
	};

	const saveHandler = () => {
		setIsSaved(!isSaved);

		const newUpdate = userData.map(user => {
			if (user === el) {
				return {
					...user,
					saved: isSaved,
				};
			} else return { ...user };
		});
		setUserData(newUpdate);
	};

	const commentHandler = () => {
		setShowComment(!showComment);
	};

	const isTrue = () => {
		if (like) return { color: "red" };
		else if (!like) return { color: "" };
	};

	const saveOutput = () => {
		if (isSaved) return <p>saved!</p>;
		if (!isSaved) return <p>save</p>;
	};

	const submitButton = () => {
		const oldResponses = el.responses || false;
		let newUpdate;
		if (oldResponses && inputRef.current.value.length > 0) {
			newUpdate = userData.map(user => {
				if (user === el)
					return {
						...user,
						responses: [...oldResponses, inputRef.current.value],
					};
				else return { ...user };
			});
		} else if (!oldResponses && inputRef.current.value.length > 0) {
			newUpdate = userData.map(user => {
				if (user === el)
					return {
						...user,
						responses: [inputRef.current.value],
					};
				else return { ...user };
			});
		} else {
			newUpdate = userData.map(user => user);
		}

		inputRef.current.value = "";
		setUserData(newUpdate);
	};
	return (
		<TweetWrapper>
			<TweetHeader>
				<img src={el.avatar} alt="" />
				<h2>{el.name}</h2>
			</TweetHeader>
			<TweetBody>
				<h3>{el.title}</h3>
				<h4>{el.body}</h4>
			</TweetBody>
			<TweetActions>
				<FontAwesomeIcon
					icon={faHeart}
					onClick={likeHandler}
					style={like ? { color: "#EE2929" } : { color: "" }}
				/>
				<p>{el.likes}</p>
			</TweetActions>
			<TweetActions>
				<FontAwesomeIcon
					icon={faComment}
					style={showComment ? { color: "#1B79D6" } : { color: "" }}
					onClick={commentHandler}
				/>
				<p>comment</p>
			</TweetActions>
			<TweetActions>
				<FontAwesomeIcon
					icon={faSave}
					onClick={saveHandler}
					style={isSaved ? { color: "#9803BB" } : { color: "" }}
				/>
				{/* {isSaved ? <p>saved!</p> : <p>save</p>} */}
				{saveOutput()}
			</TweetActions>
			{showComment ? (
				<>
					<CommentList login={login} el={el} />
					<TweetComment>
						<img src={login.avatar} />
						<div>
							<p>{login.name}</p>
							<div>
								<input
									ref={inputRef}
									placeholder="add your comment"
									type="text"
								/>
								<button onClick={submitButton}>
									<FontAwesomeIcon icon={faPaperPlane} />
								</button>
							</div>
						</div>
					</TweetComment>
				</>
			) : null}
		</TweetWrapper>
	);
};

export default Tweet;
