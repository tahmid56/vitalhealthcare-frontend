import React from "react";
import useAuth from "../../hooks/useAuth";
import { useRef, useState, useEffect } from "react";
import { Button, Container, Grid, Paper, TextField, Avatar, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./Auth.scss";


const Auth = () => {
    const userRef = useRef();
    const errRef = useRef();
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loginToggle, setLoginToggle] = useState(true);
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    

    const handleShowPassword = () => {
        setShowPass(!showPass);
    };

    const handleLoginSubmit = async () => {
        try {
            const URL = `http://localhost:3500/login`;
            const response = await Axios.post(URL, {
                email: user,
                password: pwd,
            });
            console.log(response.data);
            const { accessToken, ...userdata } = response.data;
            setAuth({ email: user, ...userdata });
            const {account, infoSr} = userdata;
            console.log(account, infoSr)
            localStorage.setItem("token", accessToken);
            navigate(account===1? "/doctor-dashboard": account === 2 && !infoSr ? "/patient-biodata": "/patient-dashboard", { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }

        // setUser('');
        // setPwd('');
    };

    const handleRegisterSubmit = async ()=>{

    }

    const handleLoginToggle = (event) => {
        setLoginToggle(event);
    };
    // const login = () => {
    const loginStyle = {
        fontSize: "20px",
        fontWeight: "Bold",
        color: "Blue",
        flex: 1,
    };
    // }
    return (
        <>
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>
                <Container maxWidth="sm">
                    <Grid container spacing={2} direction="column" justifyContent="center" style={{ minHeight: "100vh" }}>
                        <Paper elevation={2} sx={{ padding: 5 }}>
                            <div className="login-register-part">
                                <div style={loginToggle ? loginStyle : { flex: 1 }} onClick={(e) => handleLoginToggle(true)}>
                                    <h3 style={{paddingLeft: "33%"}}>Login</h3>
                                </div>
                                <hr style={{ height: "40px" }} />
                                <div style={loginToggle ? { flex: 1 } : loginStyle} onClick={(e) => handleLoginToggle(false)}>
                                    <h3 style={{paddingLeft: "33%"}}>Register</h3>
                                </div>
                            </div>
                            {loginToggle ? (
                                <Grid container direction="column" justifyContent="center" alignItems="center">
                                    <Grid item paddingBottom={2} paddingTop={4} minWidth="40vh">
                                        <TextField type="email" ref={userRef} fullWidth placeholder="Email Address" autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} variant="outlined" />
                                    </Grid>

                                    <Grid item paddingBottom={5} minWidth="40vh">
                                        <TextField
                                            type={showPass ? "text" : "password"}
                                            fullWidth
                                            
                                            placeholder="Password"
                                            autoComplete="off"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleShowPassword} aria-label="toggle password" edge="end">
                                                            {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    {errMsg ? (
                                        <Alert severity="error">
                                            <AlertTitle>Error</AlertTitle>
                                            {errMsg}
                                        </Alert>
                                    ) : (
                                        <></>
                                    )}
                                    {loginToggle ? (
                                        <Grid item>
                                            <Button variant="contained" onClick={handleLoginSubmit}>
                                                Login
                                            </Button>
                                        </Grid>
                                    ) : (
                                        <Grid item>
                                            <Button variant="contained" onClick={handleRegisterSubmit}>
                                                Register
                                            </Button>
                                        </Grid>
                                    )}
                                </Grid>
                            ) : (
                                <Grid container direction="column" justifyContent="center" alignItems="center">
                                    
                                    <Grid item paddingBottom={2} paddingTop={4} minWidth="40vh">
                                        <TextField type="email" ref={userRef} fullWidth label="Email" placeholder="Email Address" autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} variant="outlined" />
                                    </Grid>

                                    <Grid item paddingBottom={5} minWidth="40vh">
                                        <TextField
                                            type={showPass ? "text" : "password"}
                                            fullWidth
                                            label="Password"
                                            placeholder="Password"
                                            autoComplete="off"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleShowPassword} aria-label="toggle password" edge="end">
                                                            {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    {errMsg ? (
                                        <Alert severity="error">
                                            <AlertTitle>Error</AlertTitle>
                                            {errMsg}
                                        </Alert>
                                    ) : (
                                        <></>
                                    )}
                                    {loginToggle ? (
                                        <Grid item>
                                            <Button variant="contained" onClick={handleLoginSubmit}>
                                                Login
                                            </Button>
                                        </Grid>
                                    ) : (
                                        <Grid item>
                                            <Button variant="contained" onClick={handleRegisterSubmit}>
                                                Register
                                            </Button>
                                        </Grid>
                                    )}
                                </Grid>
                            )}
                        </Paper>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Auth;
