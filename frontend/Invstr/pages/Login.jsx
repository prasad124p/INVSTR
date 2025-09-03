import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]= useState("");
  const navigate =useNavigate();


  const handleSubmit= async(e)=>{
    e.preventDefault();
  
  try{
    const res = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
      role,
    });

  if(res.data.token){
    localStorage.setItem("authToken", res.data.token);
    localStorage.setItem("role",role);

    if(role==="Startup")navigate("/startup-dashboard")
    if(role==="Investor")navigate("/Investor-dashboard")
    if(role==="Admin")navigate("/Admin-dashboard")
  }else{
    alert("Invalid User Credential")
    }
  }catch(error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="flex flex-col bg-white p-10 rounded-2xl shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-black font-extrabold text-2xl mb-6 text-center">Login</h2>

        <input
          className="text-black border border-black mb-4 px-3 py-2 rounded"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="text-black border border-black mb-6 px-3 py-2 rounded"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className='border mb-6 px-3 py-2 rounded text-gray-500'
          value={role}
          onChange={(e)=> setRole(e.target.value)}
        >
          <option value="" disabled hidden> Select Role</option>
          <option disabled>────────────────────────</option>
          <option className='text-black' value="Startup">Startup</option>
          <option disabled>────────────────────────</option>
          <option className='text-black' value="Investor">Investor</option>
          <option disabled>────────────────────────</option>
          <option className='text-black' value="Admin">Admin</option>
          <option disabled>────────────────────────</option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Submit
        </button>
        <p className='mt-5'>Dont have an account?<span className='text-blue-600' onClick={()=>navigate("/signup")}> Sign Up</span></p>
      </form>
    </div>
  );
};

export default Login;
