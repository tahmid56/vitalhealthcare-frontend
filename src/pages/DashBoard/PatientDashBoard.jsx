import { Button, Card, CardActions, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientDashBoard = () => {
    const [bFastOpen, setBFastOpen] = useState(false);
    const [mSnacksOpen, setMSnacksOpen] = useState(false);
    const [bPOpen, setBPOpen] = useState(false);
    const [lOpen, setLOpen] = useState(false);
    const [eOpen, setEOpen] = useState(false);
    const [nOpen, setNOpen] = useState(false);
    const [dOpen, setDOpen] = useState(false);
    const [exerOpen, setExerOpen] = useState(false);
    const [sleepOpen, setSleepOpen] = useState(false);
    const [othersOpen, setOthersOpen] = useState(false);

    const[todayInfo, setTodayInfo] = useState({});

    const navigate = useNavigate();
    const [patientCred, setPatientCred] = useState({});
    const handleClick = () => {
        navigate("/patient-biodata");
    };
    const fetchPatientData = async () => {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3500/patientProfile", {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data.todaysInfo)
        setPatientCred(response.data);
        setTodayInfo(response.data.todaysInfo);
    };
    useEffect(() => {
        fetchPatientData();
    }, []);

    const handlebfastOpenChange = () => {
        setBFastOpen(!bFastOpen);
    };
    const handlemsnacksOpenChange = () => {
        setMSnacksOpen(!mSnacksOpen);
    };
    const handlebpOpenChange = () => {
        setBPOpen(!bPOpen);
    };
    const handleLOpenChange =()=>{
        setLOpen(!lOpen);
    };
    const handleEOpenChange = ()=>{
        setEOpen(!eOpen);
    };
    const handleNOpenChange =()=>{
        setNOpen(!eOpen);
    }
    const handleDOpenChange = ()=>{
        setDOpen(!dOpen);
    };
    const handleExerOpenChange = ()=>{
        setExerOpen(!exerOpen);
    };
    const handleSleepOpenChange = ()=>{
        setSleepOpen(!sleepOpen)
    };
    const handleOthersOpenChange = ()=>{
        setOthersOpen(!othersOpen)
    };
    const handleBChange =(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.breakfast = e.target.value;
        setTodayInfo(newTodayInfo);
    };
    const handleBTChange =(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.bTime = e.target.value;
        setTodayInfo(newTodayInfo);
    };
    const handleBGlassChange =(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.bglassofwater = e.target.value;
        setTodayInfo(newTodayInfo);
    };
    const handleMsnackChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.morningsnacks = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleMtimeChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.mTime = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleMglassChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.mglassofwater = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    
    const handleLChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.lunch = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleLtimeChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.lTime = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleLglassChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.lglassofwater = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleEsnackChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.eveningSnacks = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleEtimeChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.eTime = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleEglassChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.eglassofwater = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleNChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.nightSnacks = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleNtimeChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.nTime = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleNglassChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.nglassofwater = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleDsnackChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.dinner = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleDtimeChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.dTime = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleDglassChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.dglassofwater = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleExerciseChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.exercise = e.target.value;
        setTodayInfo(newTodayInfo)
    };
    const handleSleepTime=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.sleeptime = e.target.value;
        setTodayInfo(newTodayInfo)
    };   
    const handleBpChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.bloodpressure = e.target.value;
        setTodayInfo(newTodayInfo)
    };  
    const handleOfoodChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.otherfood = e.target.value;
        setTodayInfo(newTodayInfo)
    }; 
    const handleOwaterChange=(e)=>{
        const newTodayInfo = todayInfo;
        newTodayInfo.oglassofwater = e.target.value;
        setTodayInfo(newTodayInfo)
    }; 
    const handleSaveClick =() =>{
        const payload ={
            
        }
    }
     return (
        <div>
            {patientCred.userData && (
                <Paper elevation={2} style={{ paddingLeft: 20, paddingTop: 2, paddingBottom: 2, width: "300px" }}>
                    <h3>{patientCred ? patientCred.userData.name : ""}</h3>
                    <h4>{patientCred ? patientCred.userData.email : ""}</h4>
                    <h4>{patientCred ? patientCred.userData.phone : ""}</h4>
                    <h4>{patientCred ? patientCred.userData.address : ""}</h4>
                </Paper>
            )}
            <div style={{ display: "flex", "overflow-y": "true" }}>
                <Paper elevation={2} style={{ marginTop: 5, padding: 5 }}>
                    {bFastOpen && !patientCred?.todaysInfo?.bTime && !patientCred?.todaysInfo?.breakfast && !patientCred.todaysInfo?.bglassofwater ? (
                        <div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>What did you have for your breakfast ?</h3>
                                <TextField size="small" value={todayInfo.breakfast?todayInfo.breakfast: "" } onChange={handleBChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>When did you have your Breakfast Time ?</h3>
                                <TextField size="small" value={todayInfo.bTime? todayInfo.bTime: ""} onChange={handleBTChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>How many glasses of water did you drink during your breakfast?</h3>
                                <TextField size="small" value={todayInfo.bglassofwater? todayInfo.bglassofwater: ""} onChange={handleBGlassChange}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handlebfastOpenChange}>
                                        BreakFast
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {mSnacksOpen && !patientCred?.todaysInfo?.mTime && !patientCred?.todaysInfo?.morningsnacks && !patientCred.todaysInfo?.mglassofwater ? (
                        <div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>What did you have for your morning snacks ?</h3>
                                <TextField size="small" value={todayInfo?.morningsnacks} onChange={handleMsnackChange} />
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>When did you have your morning snacks?</h3>
                                <TextField size="small" value={todayInfo?.mTime} onChange={handleMtimeChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>How many glasses of water did you drink during your morning snacks?</h3>
                                <TextField size="small" value={todayInfo?.mglassofwater} onChange={handleMglassChange}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handlemsnacksOpenChange}>
                                        Morning Snacks
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {lOpen && !patientCred?.todaysInfo?.lTime && !patientCred?.todaysInfo?.lunch && !patientCred.todaysInfo?.lglassofwater ? (
                        <div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>What did you have for your Lunch?</h3>
                                <TextField size="small" value={todayInfo?.lunch} onChange={handleLChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>When did you have your Lunch ?</h3>
                                <TextField size="small" value={todayInfo?.lTime} onChange={handleLtimeChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>How many glasses of water did you drink during your lunch?</h3>
                                <TextField size="small" value={todayInfo?.lglassofwater} onChange={handleLglassChange}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handleLOpenChange}>
                                        Lunch
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {eOpen && !patientCred?.todaysInfo?.eTime && !patientCred?.todaysInfo?.eveningSnacks && !patientCred.todaysInfo?.eglassofwater ? (
                        <div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>What did you have for your evening snacks?</h3>
                                <TextField size="small" value={todayInfo?.eveningSnacks} onChange={handleEsnackChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>When did you have your evening snacks?</h3>
                                <TextField size="small" value={todayInfo?.eTime} onChange={handleEtimeChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>How many glasses of water did you drink in the evening?</h3>
                                <TextField size="small" value={todayInfo?.eglassofwater} onChange={handleEglassChange}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handleEOpenChange}>
                                        Evening Snacks
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {nOpen && !patientCred?.todaysInfo?.nTime && !patientCred?.todaysInfo?.nightSnacks && !patientCred.todaysInfo?.nglassofwater ? (
                        <div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>What did you have for your night snacks?</h3>
                                <TextField size="small" value={todayInfo?.nightSnacks} onChange={handleNChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>When did you have your night snacks?</h3>
                                <TextField size="small" value={todayInfo?.nTime} onChange={handleNtimeChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>How many glasses of water did you drink during night?</h3>
                                <TextField size="small" value={todayInfo?.nglassofwater} onChange={handleNglassChange}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handleNOpenChange}>
                                        Night Snacks
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {dOpen && !patientCred?.todaysInfo?.dTime && !patientCred?.todaysInfo?.dinner && !patientCred.todaysInfo?.dglassofwater ? (
                        <div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>What did you have for your dinner?</h3>
                                <TextField size="small" value={todayInfo?.dinner} onChange={handleDsnackChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>When did you have your dinner?</h3>
                                <TextField size="small" value={todayInfo?.dTime} onChange={handleDtimeChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>How many glasses of water did you drink during dinner?</h3>
                                <TextField size="small" value={todayInfo?.dglassofwater} onChange={handleDglassChange}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handleDOpenChange}>
                                        Dinner 
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {exerOpen && !patientCred?.todaysInfo?.exercise ? (
                        <div style={{ paddingLeft: 10 }}>
                            <h3>What exercised have you performed?</h3>
                            <TextField size="small" value={todayInfo?.exercise} onChange={handleExerciseChange}/>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handleExerOpenChange}>
                                        Exercise
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {sleepOpen && !patientCred?.todaysInfo?.sleeptime ? (
                        <div style={{ paddingLeft: 10 }}>
                            <h3>How many hours of of sleep did you get and when?</h3>
                            <TextField size="small" value={todayInfo?.sleeptime} onChange={handleSleepTime}/>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handleSleepOpenChange}>
                                        Sleep Time
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {bPOpen && !patientCred?.todaysInfo?.bloodpressure ? (
                        <div style={{ paddingLeft: 10 }}>
                            <h3>What is your current blood pressure?</h3>
                            <TextField size="small" value={todayInfo?.bloodpressure} onChange={handleBpChange}/>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handlebpOpenChange}>
                                        BloodPressure
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    {othersOpen && !patientCred?.todaysInfo?.otherfood && !patientCred?.todaysInfo?.oglassofwater  ? (
                        <div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>Food?</h3>
                                <TextField size="small" value={todayInfo?.otherfood} onChange={handleOfoodChange}/>
                            </div>
                            <div style={{ paddingLeft: 10 }}>
                                <h3>Water?</h3>
                                <TextField size="small" value={todayInfo?.oglassofwater} onChange={handleOwaterChange}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ border: "1" }}>
                                <CardActions>
                                    <Button size="small" onClick={handleOthersOpenChange}>
                                        Others 
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                    )}
                    <Button style={{margin:10}} variant="contained">Save</Button>
                </Paper>
                
            </div>
        </div>
    );
};

export default PatientDashBoard;
