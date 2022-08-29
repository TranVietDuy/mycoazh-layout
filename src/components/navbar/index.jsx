import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Button,
} from "@mui/material"
import { AppBar, Search, SearchIconWrapper, StyledInputBase } from "./styles"

import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"

import { useState } from "react"
import {
  Home,
  People,
  Person,
  ExpandLess,
  ExpandMore,
  SportsSoccer,
  SettingsOutlined,
  NoteAltOutlined,
} from "@mui/icons-material"
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
    <img
      src="https://mycoazh.fi/img/mycoazh_logo.png"
      alt="logo"
      style={{ height: "50px" }}
    />
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
      <Box sx={{ flexGrow: 0, position: "relative" }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </IconButton>
        </Tooltip>
        <Menu
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
  const [open, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState(open)
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
        backgroundColor: "#004C54",
        boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.25)",
        p: 2,
        height: 1,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ height: 50, display: "flex", alignItem: "center" }}>
        <Typography sx={{ mr: 2 }}>Welcome Temmu! </Typography>
        <Avatar
          sx={{ width: 40, height: 40, display: "flex" }}
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Box>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary="Logout" />
      </ListItemButton>
      <Divider />
      <List>
        <ListItemButton Link to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton Link to="/games/:id">
          <ListItemIcon>
            <SportsSoccer />
          </ListItemIcon>
          <ListItemText primary="Game" />
        </ListItemButton>
        <ListItemButton Link to="/players/:id">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Players" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Team" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} Link to="/team/:id">
              <ListItemText primary="Team Statistics" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} Link to="/team/:id">
              <ListItemText primary="Team Visualizations" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton Link to="/note/:id">
          <ListItemIcon>
            <NoteAltOutlined />
          </ListItemIcon>
          <ListItemText primary="Note" />
        </ListItemButton>
        <ListItemButton Link to="/setting">
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>
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
          <NoteAltOutlined />
          <Box sx={{ flexGrow: 1 }} />
          <SettingsOutlined />
          <Box sx={{ flexGrow: 1 }} />
          <MenuSettings />
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Toolbar sx={{ visibility: "hidden", height: "70px" }} />
        {list()}
      </Drawer>
    </>
  )
}

export default Navbar
