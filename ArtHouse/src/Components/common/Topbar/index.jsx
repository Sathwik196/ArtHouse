import React from "react";
import "./index.scss";
import User from "../../../assets/user.png";
import ArtHouse_logo from "../../../assets/ArtHouse_logo.png";
import { AiFillHome, AiFillMessage, AiFillBell } from "react-icons/ai";
import { FaUsers, FaBriefcase, FaSearch, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
    let navigate = useNavigate();
    const goToRoute = (route) => {
        navigate(route);
    };
    return (
        <div className="topbar-main">
            <img
                className="ArtHouse-Logo"
                src={ArtHouse_logo}
                alt="ArtHouseLogo"
            />
            <div className="react-icons">
                <FaSearch size={25} className="react-icon" />
                <AiFillHome
                    size={25}
                    className="react-icon"
                    onClick={() => goToRoute("/home")}
                />
                <FaUsers
                    size={25}
                    className="react-icon"
                    onClick={() => goToRoute("/profile")}
                />
                <FaBriefcase size={25} className="react-icon" />
                <AiFillMessage size={25} className="react-icon" />
                <FaBell size={25} className="react-icon" />
            </div>
            <img className="User-icon" src={User} alt="Usericon" />
        </div>
    );
}
