const login = ({ login, setActiveLogin, setIsActive, isActive }) => {
	const activeHandler = () => {
		setActiveLogin(login);
		setIsActive(!isActive);
	};
	return (
		<div onClick={activeHandler}>
			<p>{login.name}</p>
			<img src={login.avatar} alt="" />
		</div>
	);
};

export default login;
