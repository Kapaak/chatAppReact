import React, { useState } from "react";
import data from "./Data";
import Tweets from "./Tweets/Tweets";
import { AvatarGenerator } from "random-avatar-generator";

function App() {
	const [userData, setUserData] = useState(data());
	const [login, setLogin] = useState({
		name: "Pavel Zapletal",
		avatar: new AvatarGenerator().generateRandomAvatar("Pavel"),
	});
	return (
		<div>
			<p>my app!</p>
			<img src={login.avatar} alt="" />
			<p>name: {login.name}</p>
			<Tweets userData={userData} setUserData={setUserData} login={login} />
		</div>
	);
}

export default App;
