import { Button, Paper, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const PatientBiodata = () => {
    const navigate = useNavigate()
    const [goalwl, setGoalWL] = useState("");
    const [motivation, setMotivation] = useState("");
    const [currentWt, setCurrentWt] = useState();
    const [targetWeight, setTargetWeight] = useState();
    const [healthproblemshistory, setHealthProblemsHistory] = useState("");
    const [bfood, setBfood] = useState("");
    const [btime, setBtime] = useState("");
    const [msnacks, setMSnacks] = useState("");
    const [mtime, setMTime] = useState("");
    const [lfood, setLFood] = useState("");
    const [ltime, setLTime] = useState("");
    const [esnack, setESnack] = useState("");
    const [etime, setETime] = useState("");
    const [dfood, setDfood] = useState("");
    const [dtime, setDTime] = useState("");
    const [nsnacks, setNSnack] = useState("");
    const [ntime, setNTime] = useState("");
    const [glassofwater, setGlassOfWater] = useState("");
    const [sleeptime, setSleepTime] = useState("");
    const [sleepTotal, setSleepTotal] = useState("");
    const [exercise, setExercise] = useState("");

    const handleGoalWLChange = (event) => {
        setGoalWL(event.target.value);
    };
    const handleTargetWeightChange = (e)=>{
        setTargetWeight(e.target.value)
    }
    const handleCurrentWtChange =(e)=>{
        setCurrentWt(e.target.value);
    }
    const handleMotivationChange = (e) => {
        setMotivation(e.target.value);
    }; 
    const handleHealthProbChange = (event) => {
        setHealthProblemsHistory(event.target.value);
    };
    const handleBFoodChange = (event) => {
        setBfood(event.target.value);
    };
    const handleBTimeChange = (event) => {
        setBtime(event.target.value);
    };
    const handleMsnacksChange = (event) => {
        setMSnacks(event.target.value);
    };
    const handleMtimeChange = (event) => {
        setMTime(event.target.value);
    };
    const handleLFoodChange = (event) => {
        setLFood(event.target.value);
    };
    const handleLTimeChange = (event) => {
        setLTime(event.target.value);
    };
    const handleESnackChange = (event) => {
        setESnack(event.target.value);
    };
    const handleETimeChange = (event) => {
        setETime(event.target.value);
    };
    const handleDFoodChange = (event) => {
        setDfood(event.target.value);
    };
    const handleDTimeChange = (event) => {
        setDTime(event.target.value);
    };
    const handleNSnacksChange = (event) => {
        setNSnack(event.target.value);
    };
    const handleNTimeChange = (event) => {
        setNTime(event.target.value);
    };
    const handleGlassChange = (event) => {
        setGlassOfWater(event.target.value);
    };
    const handleSleepTimeChange = (event) => {
        setSleepTime(event.target.value);
    };
    const handleSleepTotalChange = (event) => {
        setSleepTotal(event.target.value);
    };
    const handleexerciseChange = (event) => {
        setExercise(event.target.value);
    };
    const handleSaveClick =async ()=>{
        try{
            const payload = {goalwl, motivation, currentwt:currentWt, targetweight:targetWeight, healthproblemhistory:healthproblemshistory, bfood, btime, msnacks, mtime, lfood, ltime, esnack, etime, dfood, dtime, nsnacks, ntime, glassesofwater:glassofwater, sleeptime, sleeptotal:sleepTotal, exercise}
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:3500/lifestyle", payload,{
            headers: { Authorization: `Bearer ${token}` },});
            console.log(response.data);
            navigate("/patient-dashboard");
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div style={{"overflow-y":"scroll", height: "100%"}}>
            <Container maxWidth="md">
                <Paper elevation={2}>
                        <h1 style={{marginLeft: "40%"}}>Life Style</h1>
                    
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What is your goal of weight loss?</h1>
                        <Box
                            style={{
                                width: "90%",
                                paddingLeft: "5%",
                            }}
                        >
                            <TextField id="demo-simple-select" fullWidth value={goalwl} onChange={handleGoalWLChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What Motivates you to lose weight?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={motivation} onChange={handleMotivationChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What is your current weight?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={currentWt} onChange={handleCurrentWtChange} />
                        </Box>
                    </div>
                    
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>Do you have any health problem history?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={healthproblemshistory} onChange={handleHealthProbChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What do you eat for breakfast?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={bfood} onChange={handleBFoodChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>When do you have breakfast?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={btime} onChange={handleBTimeChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What do you eat for morning snacks?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={msnacks} onChange={handleMsnacksChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>When do you have morning snacks?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={mtime} onChange={handleMtimeChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What do you eat for Lunch?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={lfood} onChange={handleLFoodChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>When do you have your Lunch?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={ltime} onChange={handleLTimeChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What do you eat for Evening snacks?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={esnack} onChange={handleESnackChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>When do you have your Evening Snacks?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={etime} onChange={handleETimeChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What do you eat for dinner?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={dfood} onChange={handleDFoodChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>When do you have your Dinner?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={dtime} onChange={handleDTimeChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What do you eat for night snacks?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={nsnacks} onChange={handleNSnacksChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>When do you have your night snacks?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={ntime} onChange={handleNTimeChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>On average how many glasses of water do you drink in a day?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={glassofwater} onChange={handleGlassChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What is your sleep time schedule?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={sleeptime} onChange={handleSleepTimeChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What is your total sleep hours per day?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={sleepTotal} onChange={handleSleepTotalChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What exercise do you do?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={exercise} onChange={handleexerciseChange} />
                        </Box>
                    </div>
                    <div>
                        <h1 style={{ paddingLeft: 40, paddingTop: 5, fontSize: 20 }}>What is your target weight ?</h1>
                        <Box style={{ width: "90%", paddingLeft: "5%" }}>
                            <TextField id="demo-simple-select" fullWidth value={targetWeight} onChange={handleTargetWeightChange} />
                        </Box>
                    </div>
                    <Button variant="contained" onClick={handleSaveClick} style={{marginLeft: "45%", padding: 10, marginTop: 5, marginBottom: 5}}>Save</Button>
                </Paper>
            </Container>
        </div>
    );
};

export default PatientBiodata;
