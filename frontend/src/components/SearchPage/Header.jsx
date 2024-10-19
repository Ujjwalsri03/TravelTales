import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import styled from "styled-components";
import logo from "./assets/image.png"
import { Link } from "react-router-dom";
import { Login } from "../login/Login";
const Icondivcss = styled.div`
  .icondiv {
    height: 70px;  /* Increased height for more space */
    margin-top: 20px;
    width: 100%;
    margin: auto;
    background-color: white;
    display: flex;
    align-items: center;  /* Vertically center the items */
    justify-content: space-around;  /* Add space around elements */
    position: sticky;
    z-index: 100;
    text-align: center;

    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 60%;
      p {
        margin: 0px;
        color: #555454;
        font-size: 11px;
      }
      span {
        color: #a3a3a3;
        cursor: pointer;
      }
      span:hover {
        color: #2db0fc;
      }
      div:hover {
        color: #2db0fc;
      }
    }
  }

  .imgdiv {
    // position: relative;
    width: auto;
    height: 120px;
    padding: 0px 60px 0px 120px;
    img {
      width: auto;  /* Keep the width auto to maintain aspect ratio */
      height: 100%;  /* Make sure the image takes full height */
      max-width: 180px;  /* Set a maximum width for the logo */
      object-fit: contain;  /* Maintain the aspect ratio */
    }
  }

  .login {
    position: relative;
    margin-left: auto;  /* Push the login button to the right */
    margin-right: 20px;  /* Add some space on the right */
  }
`;


export const Header = () => {
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  return (
    <Icondivcss>
      <div className="icondiv">
        <div className="imgdiv">
        <Link to="/">
            <img src={"https://www.gtp.gr/MGfiles/logos/49684_Travel-Tales-Athens_Logo_600x600.png"} alt="Logo" />
          </Link>
        </div>
        <div className="icons">
          <div>
            <span>
              <FlightIcon style={{ fontSize: 30, padding: 4 }}></FlightIcon>
            </span>
            <p>Flights</p>
          </div>
          <div>
            <span>
              <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
            </span>
            <p>Hotels</p>
          </div>
          <div>
            <span>
              <HomeWorkIcon style={{ fontSize: 30, padding: 4 }}></HomeWorkIcon>
            </span>
            <p>Homestays</p>
          </div>
          <div>
            <span>
              <HolidayVillageIcon
                style={{ fontSize: 30, padding: 4 }}
              ></HolidayVillageIcon>
            </span>
            <p>Hoiday packages</p>
          </div>
          <div>
            <span>
              <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
            </span>
            <p>Trains</p>
          </div>
          <div>
            <span>
              <DirectionsBusFilledIcon
                style={{ fontSize: 30, padding: 4 }}
              ></DirectionsBusFilledIcon>
            </span>
            <p>Buses</p>
          </div>
          <div>
            <span>
              <LocalTaxiIcon
                style={{ fontSize: 30, padding: 4 }}
              ></LocalTaxiIcon>
            </span>
            <p>Cabs</p>
          </div>
          <div>
            <span>
              <CreditCardIcon
                style={{ fontSize: 30, padding: 4 }}
              ></CreditCardIcon>
            </span>
            <p>Visa</p>
          </div>
          <div>
            <span>
              <FlightTakeoffIcon
                style={{ fontSize: 30, padding: 4 }}
              ></FlightTakeoffIcon>
            </span>
            <p>Charter flights</p>
          </div>
          <div>
            <span>
              <DownhillSkiingIcon
                style={{ fontSize: 30, padding: 4 }}
              ></DownhillSkiingIcon>
            </span>
            <p>Activities</p>
          </div>
        </div>
        <div className="login">
        <Login handleClick={handlePopup}/>
        </div>
      </div>
    </Icondivcss>
  );
};
