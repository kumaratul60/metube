import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const { useState } = React;

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__img"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header__center">
        {/* to connect or map  state to input => value = {state} 
        and to upadate input-field => onChange={(e)=>setState(e.target.value)}
        */}
        <input
          value={inputSearch}
          type="text"
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        {/* dynamically update the input field search */}
        <Link to={`/search/${inputSearch}`}>
          <YoutubeSearchedForIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icons" />
        <AppsIcon className="header__icons" />
        <NotificationsNoneRoundedIcon className="header__icons" />
        <Avatar
          alt="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPiYB8dCdTJN7DTmcliXhmof21Wdy0RIqng&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Header;
