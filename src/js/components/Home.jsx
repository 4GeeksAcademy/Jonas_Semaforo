import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");
	
	let str = "";
	if (selectedColor === "red") str=" glow";
	
	return (
		<div className="traffic-light">
			<div className={"light red"+(selectedColor === "red") ? " glow" : ""}></div>		
			<div className="light yellow glow"></div>		
			<div className="light green"></div>		
		</div>
	);
};

export default Home;