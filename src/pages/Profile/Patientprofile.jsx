import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Patientprofile = () => {
    const [pData, setPData] = useState({})
    const { id }= useParams()
    const fetchPatientData = async()=>{
        console.log("hello")
        try{
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://localhost:3500/patient-info?id=${id}`,{
            headers: { Authorization: `Bearer ${token}` },});
            console.log(response.data)
            setPData(response.data);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchPatientData()
    }, [])
  return (
    <div>Patientprofile</div>
  )
}

export default Patientprofile