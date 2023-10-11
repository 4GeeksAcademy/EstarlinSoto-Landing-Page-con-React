import React from "react";

//include images into your bundle
import NavBar from "./NavBar.jsx";
import JumboTron from "./JumboTron.jsx";
import Card from "./Card.jsx";
import CardInfo from "./CardInfo.js";


//create your first component
const Home = () => {
	return (
			<div>
				<NavBar />		
				<JumboTron />

		
	<div class=" py-4 ">
        <div class="cardContainer">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
				
				{
					CardInfo.map((ele, i)=> {

				return (<Card cardTitle={ele.name} cardImgUrl={ele.img} cardDescription={ele.Description} urlBtn={ele.urlBtn}/>)				
			})
			}

			</div>
		</div>

					<div className="footer">
						<h4 className="text-center py-5 mb-0 text-light">
							Copyright © Your Website 2023
						</h4>
        		</div>
			</div>
			</div>
			
	);
};

export default Home;

