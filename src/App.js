import React, { useState } from "react";
import data from "./Data";
import Tweets from "./Tweets/Tweets";
import { AvatarGenerator } from "random-avatar-generator";
import Login from "./Login/Login";

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
	]);
	return (
		<div>
			<Login login={activeLogin} />
			<Tweets
				userData={userData}
				setUserData={setUserData}
				login={activeLogin}
			/>
		</div>
	);
}

export default App;
