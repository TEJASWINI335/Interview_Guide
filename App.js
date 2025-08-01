import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Companies from './pages/Companies'; import About from './pages/About';
// import Loginsignup from './pages/LoginSignup'; import Latestjobs from './pages/Latestjobs'; import Questions from './pages/Questions';
import JobDetails from './pages/JobDetails'; import Login from './pages/Login';
import Signup from './pages/Signup';
function App() { return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/companies" element={<Companies />} />
<Route path="/about" element={<About />} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/latestjobs" element={<Latestjobs />} />
<Route path="/job-details/:jobId" element={<JobDetails />} />
<Route path="/questions/:companyId" element={<Questions />} />
</Routes>
</BrowserRouter>
);
}
export default App;

