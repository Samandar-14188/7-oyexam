import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoMenu className="menu-icon" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} className="Menuicons"><NavLink to="/">HOME</NavLink></MenuItem>
        <MenuItem onClick={handleClose} className="Menuicons"><NavLink to='headphones'>HEADPHONES</NavLink></MenuItem>
        <MenuItem onClick={handleClose} className="Menuicons"><NavLink to='speakers'>SPEAKERS</NavLink></MenuItem>
        <MenuItem onClick={handleClose} className="Menuicons"><NavLink to='earphones'>EARPHONES</NavLink></MenuItem>
      </Menu>
    </div>
  );
}
