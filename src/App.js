import React from "react";
import Navigation from "./component/Navigation";
import Header from "./component/Header";
import Stack from "./component/Stack";
import Contact from "./component/Contact";

function App() {
	return (
		//add prevent right click contextmenu onContextMenu={(e) => e.preventDefault()}
		<div>
			<Navigation />
			<Header />
			<Stack />
			<Contact />
		</div>
	);
}

export default App;
