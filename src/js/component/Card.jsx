import React from "react";
import PropTypes from "prop-types";

const Card = (props)=> {
    return(
            <div class="col text-center ">
              <div class="card shadow-sm">
                <img src={props.cardImgUrl} alt="IM A CARD!" />
                <div class="card-body"> 
                <h1>{props.cardTitle}</h1>
                  <p class="card-text">{props.cardDescription}</p>
                </div>
                <div class="d-flex justify-content-center align-items-center border p-3">
                <a className="btn btn-primary btn-lg" href={props.urlBtn} role="button">Click for more Info</a>
                  
                  </div>
              </div>
            </div>

    );

}

Card.propTypes = {
  cardImgUrl: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  urlBtn: PropTypes.string,
};


export default Card;