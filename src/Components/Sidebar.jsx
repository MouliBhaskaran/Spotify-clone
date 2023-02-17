import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/spotifySidebarLogo.jpg";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateProviderValue } from "./../StateManagement/StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateProviderValue();
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={Logo} alt="SpotifySidebarLogo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/* Optional rendering for the playlists */}
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
