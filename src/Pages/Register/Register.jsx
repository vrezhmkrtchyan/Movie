import React from "react";
import movies from "./RegisterIMG/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg";
import serials from "./RegisterIMG/rob-griffin-gfyX-JZz9js-unsplash.jpg";
import twShows from "./RegisterIMG/erik-mclean-U-Vu_r6qyyU-unsplash.jpg";
import "./Register.css";

const Register = () => {
  return (
    <div className="Register">
      <div className="Register-row">
        <div className="Register-left">
          <div className="Register-leftItems">
            <img src={movies} alt="" />
            <div className="Register-leftInfo">
              <h1>Best Movies In The World</h1>
              <p>
                Lorem Ipsum is simply dummy  since the 1500s
              </p>
            </div>
          </div>
          <div className="Register-leftItems">
            <img src={serials} alt="" />
            <div className="Register-leftInfo">
              <h1>Best Serials In The World</h1>
              <p>
                Lorem Ipsum is simply dummy text of  since the 1500s
              </p>
            </div>
          </div>
          <div className="Register-leftItems">
            <img src={twShows} alt="" />
            <div className="Register-leftInfo">
              <h1>Best Tv Shows In The World</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printingver since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className="Register-right"></div>
      </div>
    </div>
  );
};

export default Register;
