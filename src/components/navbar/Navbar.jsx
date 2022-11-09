import "./navbar.scss";
import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div
            className="item darkMode"
            onClick={() => dispatch({ type: "TOGGLE" })}
          >
            <DarkModeOutlinedIcon className="icon" />
          </div>
          {/*  */}
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/236565692_2912891505622271_8278126559179180448_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGR-taHD2t8Gypl75Su69Uwg1Cr0M45Zs-DUKvQzjlmzxISQrDYtzCv9e_12aQq47P86xXXdsouGhJrSnR_0FVD&_nc_ohc=CQdKnP1YHXYAX8E8V4S&tn=LDsQRtEcHK3N-XdA&_nc_ht=scontent.fcai19-4.fna&oh=00_AfCV24TNDeRRpiWHCwN92Srk3UcKlDkQed005BtPs4bVRg&oe=636C6CD5"
              alt="Avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
