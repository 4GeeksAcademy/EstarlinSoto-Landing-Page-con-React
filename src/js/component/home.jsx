import React from "react";

//se hacen las importaciones para incluir los elementos en el home page
import NavBar from "./NavBar.jsx";
import JumboTron from "./JumboTron.jsx";
import Card from "./Card.jsx";
import CardInfo from "./CardInfo.js";



const Home = () => {
	return (
		<div className="">
			<NavBar /> {/*Traemos el elemnto navbar*/}

			<JumboTron /> {/* traemos el elemento jumbotron*/}

			<div className=" py-4 ">
				<div className="cardContainer">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
						{CardInfo.map((ele) => { return (<Card cardTitle={ele.name} cardImgUrl={ele.img} cardDescription={ele.Description} urlBtn={ele.urlBtn} />) })}{/*se hace un mapeo del objeto info importado como CardInfo*/}
					</div>
				</div>
				<div className="footer">
					<h4 className="text-center py-5 text-light">
						Copyright © Your Website 2023
					</h4>
				</div>
			</div>
		</div>

	);
};

export default Home;

