import { Button, Card, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./docdash.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ['Profile', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DoctorDashBoard = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [docCred, setDocCred] = useState({});
    const navigate = useNavigate();

    const fetchDocCred = async () => {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3500/doctor-credentials", {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);
        setDocCred(response.data);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        fetchDocCred();
    }, []);
    const handleClick = () => {
        console.log(docCred);
    };
    const handleDetailsClick = (index) => {
        navigate(`/patient-profile/${index}`);
    };
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Vital Health Care
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
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
                    </Toolbar>
                </Container>
            </AppBar>
            <div className="info-cards">
                    <h1 onClick={handleClick}>Account Type: Doctor</h1>
                    <h1>Name: {docCred.userData ? docCred.userData.name : ""}</h1>
                    <h1>Email: {docCred.userData ? docCred.userData.email : ""} </h1>
                    <h1>Contact: {docCred.userData ? docCred.userData.phone : ""}</h1>
                    <Button variant="contained">Edit Profile</Button>
            </div>
            <div className="contents">
                <TableContainer component={Card}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className="tablehead">
                                <TableCell align="center">Patient Name</TableCell>
                                <TableCell align="center">Patient Email</TableCell>
                                <TableCell align="center">Patient Phone</TableCell>
                                <TableCell align="center">Patient Address</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {docCred.userList &&
                                docCred.userList.map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{user.name && user.name}</TableCell>
                                        <TableCell align="center">{user.email && user.email}</TableCell>
                                        <TableCell align="center">{user.phone && user.phone}</TableCell>
                                        <TableCell align="center">{user.address && user.address}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" onClick={(e) => handleDetailsClick(index)}>
                                                Show Details
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default DoctorDashBoard;
