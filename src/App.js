import React, { useState, useEffect } from "react";
import data from "./Data";
import Tweets from "./Tweets/Tweets";
import { AvatarGenerator } from "random-avatar-generator";
import ActiveLogin from "./ActiveLogin/ActiveLogin";
import InitialLoad from "./InitialLoad/InitialLoad";

function App() {
	const [userData, setUserData] = useState(data());
	const [activeLogin, setActiveLogin] = useState({
		name: "Pavel Zapletal",
		avatar: new AvatarGenerator().generateRandomAvatar("Pavel"),
	});
	const [loginList, setLoginList] = useState([
		{
			name: "Pavel Zapletal",
			avatar: new AvatarGenerator().generateRandomAvatar("Pavel"),
		},
		{
			name: "Tomas Jedno",
			avatar: new AvatarGenerator().generateRandomAvatar("Tomas"),
		},
		{
			name: "Prokop Dvere",
			avatar: new AvatarGenerator().generateRandomAvatar("Prokop"),
		},
	]);
	const [onLoad, setOnLoad] = useState(false);

	useEffect(() => {
		setOnLoad(!onLoad);
	}, []);
	return (
		<div>
			<InitialLoad
				setOnLoad={setOnLoad}
				onLoad={onLoad}
				loginList={loginList}
				setActiveLogin={setActiveLogin}
			/>
			<ActiveLogin
				login={activeLogin}
				loginList={loginList}
				setActiveLogin={setActiveLogin}
				setOnLoad={setOnLoad}
				onLoad={onLoad}
			/>
			<Tweets
				userData={userData}
				setUserData={setUserData}
				login={activeLogin}
			/>
		</div>
	);
}

export default App;
