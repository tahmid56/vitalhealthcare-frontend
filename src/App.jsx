import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import DoctorDashBoard from "./pages/DashBoard/DoctorDashBoard";
import PatientDashBoard from "./pages/DashBoard/PatientDashBoard";
import Patientprofile from "./pages/Profile/Patientprofile";
import PatientBiodata from "./pages/Biodata/PatientBiodata";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Auth />} />
                    <Route element={<RequireAuth/>}>
                        <Route path="/doctor-dashboard" element={<DoctorDashBoard/>} />
                        <Route path="/patient-dashboard" element={<PatientDashBoard/>} />
                        <Route path="/patient-profile/:id" element={<Patientprofile/>} />
                        <Route path="/patient-biodata" element={<PatientBiodata/>} />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
