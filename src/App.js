import React, { useState } from "react";
import data from "./Data";
import Tweets from "./Tweets/Tweets";
import { AvatarGenerator } from "random-avatar-generator";
import ActiveLogin from "./ActiveLogin/ActiveLogin";

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
	return (
		<div>
			<ActiveLogin
				login={activeLogin}
				loginList={loginList}
				setActiveLogin={setActiveLogin}
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
