import React from "react";

//include images into your bundle
import NavBar from "./NavBar.jsx";
import JumboTron from "./JumboTron.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
			<div>
				<NavBar />		
				<JumboTron />
				<Card />

				
					<div className="footer">
						<h4 className="text-center py-5 mb-0 text-light">
							Copyright © Your Website 2023
						</h4>
        		</div>
			</div>
			
	);
};

export default Home;

