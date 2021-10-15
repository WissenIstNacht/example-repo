import { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
	const [userInfo, setuserInfo] = useState()

	useEffect(() => {
		console.log("fethcing")
		fetch("http://localhost:5000/data")
			.then((res) => res.json())
			.then((data) => {
				setuserInfo(data)
			})
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Welcome.</h1>
				{userInfo ? (
					<div>
						<h2>Your user info is:</h2>
						<p>{userInfo.name}</p>
						<p>{userInfo.age}</p>
						<p>{userInfo.city}</p>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</header>
		</div>
	)
}

export default App
