import React from "react"
import { Link } from "react-router-dom"

import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import { AppBar, Search, SearchIconWrapper, StyledInputBase } from "./styles"

import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"

import {
  ExpandLess,
  ExpandMore,
  Home,
  NoteAltOutlined,
  People,
  Person,
  SettingsOutlined,
  SportsSoccer,
} from "@mui/icons-material"
import { useState } from "react"
const settings = ["Profile", "Account", "Dashboard", "Logout"]

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget)

  const handleCloseUserMenu = () => setAnchorElUser(null)

  const MenuBtn = () => (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={toggleDrawer(true)}
      sx={{
        mr: 2,
      }}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  )

  const Icon = () => (
    <Link to="/">
      <img
        src="https://mycoazh.fi/img/mycoazh_logo.png"
        alt="logo"
        style={{ height: "50px" }}
      />
    </Link>
  )

  const StyledSearchbar = () => (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase inputProps={{ "aria-label": "search" }} />
    </Search>
  )

  const MenuSettings = () => {
    return (
      <Box
        sx={{
          flexGrow: 0,
          position: "relative",
        }}
      >
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="User"
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </IconButton>
        </Tooltip>
        <Menu
          PaperProps={{
            sx: {
              backgroundColor: "rgba(0, 76, 84,0.5)",
              color: "white",
            },
          }}
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          keepMounted
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    )
  }
  //sidebar
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setOpen(open)
  }

  //expand submenu
  const [expand, setExpand] = useState(true)

  const handleClick = () => {
    setExpand(!expand)
  }

  const list = () => (
    <Box
      sx={{
        width: 438,
        p: 2,
        height: 1,
        color: "white",
      }}
    >
      <Box sx={{ height: 50, display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 2 }}>Welcome Teemu! </Typography>
        <Avatar
          sx={{ width: 40, height: 40, display: "flex" }}
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Box>
      <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
        <ListItemText primary="Logout" />
      </ListItemButton>

      <Divider />
      <List>
        <List
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <ListItemButton>
              <ListItemIcon>
                <Home fontSize="large" sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>

          <Link
            to="/games/:id"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <SportsSoccer fontSize="large" sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Game" />
            </ListItemButton>
          </Link>

          <Link
            to="/players/:id"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Person fontSize="large" sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Players" />
            </ListItemButton>
          </Link>
        </List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <People fontSize="large" sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Team" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={toggleDrawer(false)}>
            <Link
              to="/team/stat"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton sx={{ pl: 20 }}>
                <ListItemText primary="Team Statistics" />
              </ListItemButton>
            </Link>

            <Link
              to="/team/vis"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton sx={{ pl: 20 }}>
                <ListItemText primary="Team Visualizations" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <List
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Link
            to="/note/:id"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <NoteAltOutlined fontSize="large" sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItemButton>
          </Link>

          <Link
            to="/setting/:id"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <SettingsOutlined fontSize="large" sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </Link>
        </List>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <MenuBtn onClick={toggleDrawer(true)} />
          <Icon />
          <Box sx={{ flexGrow: 1 }} />
          <StyledSearchbar />
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Note">
            <IconButton color="inherit">
              <NoteAltOutlined fontSize="large" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Settings">
            <IconButton color="inherit">
              <SettingsOutlined fontSize="large" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <MenuSettings />
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 76, 84,0.5)",
            fontSize: 4,
          },
        }}
      >
        <Toolbar sx={{ visibility: "hidden", height: "70px" }} />
        {list()}
      </Drawer>
    </>
  )
}

export default Navbar
