import React from "react";
import movies from "./RegisterIMG/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg";
import serials from "./RegisterIMG/rob-griffin-gfyX-JZz9js-unsplash.jpg";
import train from "./RegisterIMG/24e1e350c75a46ae45653a3e55bfa2a5.gif";
import twShows from "./RegisterIMG/erik-mclean-U-Vu_r6qyyU-unsplash.jpg";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRegisterInfo } from "../../Store/Slices/RegisterData/API";
import { useNavigate } from "react-router-dom";
import { selectRegisterData } from "../../Store/Slices/RegisterData/RegisterData";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector(selectRegisterData);

  const FormInfoPoster = (e) => {
    e.preventDefault();

    const {
      FirstName: { value: FirstName },
      LastName: { value: LastName },
      Email: { value: Email },
      UserName: { value: UserName },
      Password: { value: Password },
    } = e.target;

    const newObject = {
      id: new Date().getTime().toString(),
      FirstName,
      LastName,
      Email,
      UserName,
      Password,
    };

    const userExists = data.some(
      (el) => el.Email === newObject.Email || el.UserName === newObject.UserName
    );

    if (userExists) {
      alert("Sorry, but that user already exists");
    } else {
      dispatch(
        fetchPostRegisterInfo({
          url: "http://localhost:8080/RegisterUsersData",
          data: newObject,
        })
      ).then(() => {
        navigate("/");
      });
    }

    e.target.reset();
  };

  return (
    <div className="Register">
      <div className="Register-row">
        <div className="Register-left">
          <div className="Register-leftItems">
            <img src={movies} alt="Movies" />
            <div className="Register-leftInfo">
              <h1>Best Movies In The World</h1>
              <p>Lorem Ipsum is simply dummy since the 1500s</p>
            </div>
          </div>
          <div className="Register-leftItems">
            <img src={serials} alt="Serials" />
            <div className="Register-leftInfo">
              <h1>Best Serials In The World</h1>
              <p>Lorem Ipsum is simply dummy text of since the 1500s</p>
            </div>
          </div>
          <div className="Register-leftItems">
            <img src={twShows} alt="TV Shows" />
            <div className="Register-leftInfo">
              <h1>Best TV Shows In The World</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing ever since the
                1500s
              </p>
            </div>
          </div>
        </div>
        <div className="Register-right">
          <div className="Register-rightInner">
            <div className="Register-rightInner-top">
              <img src={train} alt="Train" />
              <h2>Join the Movie Mania: Register Now!</h2>
              <p>
                Dive into the world of cinematic wonders! Sign up today to
                unlock exclusive access to movie reviews...
              </p>
            </div>
            <div className="Register-rightInner-bottom">
              <form onSubmit={FormInfoPoster}>
                <div className="Register-rightInner-groups">
                  <div className="Register-rightInner-items">
                    <input type="text" required name="FirstName" />
                    <label>FirstName</label>
                    <span className="focus-border"></span>
                  </div>
                  <div className="Register-rightInner-items">
                    <input type="text" required name="LastName" />
                    <label>LastName</label>
                    <span className="focus-border"></span>
                  </div>
                </div>
                <div className="Register-rightInner-groups">
                  <div className="Register-rightInner-items">
                    <input type="text" required name="Email" />
                    <label>Email</label>
                    <span className="focus-border"></span>
                  </div>
                  <div className="Register-rightInner-items">
                    <input type="text" required name="UserName" />
                    <label>UserName</label>
                    <span className="focus-border"></span>
                  </div>
                </div>
                <div className="Register-rightInner-items">
                  <input type="password" required name="Password" />
                  <label>Password</label>
                  <span className="focus-border"></span>
                </div>
                <div
                  className="Register-rightInner-btn"
                  style={{ marginTop: "2rem" }}
                >
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
