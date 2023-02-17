import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import { useStateProviderValue } from "./../StateManagement/StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateProviderValue();
  return (
    <div className="header">
      <div className="header__left">
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
