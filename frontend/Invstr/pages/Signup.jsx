import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]= useState("")
  const [name,setName]=useState("")
  const navigate =useNavigate();
  const location=useLocation();

  useEffect(() => {
  
  
    return () => {
      const queryParams=new URLSearchParams(location.search);
      const queryRole=queryParams.get("role");
      if(queryRole){
        setRole(queryRole.toLowerCase());
      }
    }
  }, [location])
  
  const handleSignup = async(e)=>{
    e.preventDefault();

    try{
      const res = await axios.post("http://localhost:5000/auth/signup",{
        name,
        email,
        password,
        role,
      })
      if(res.data.success){
        alert("Signup Successfull ! please Login")
        navigate ("/login")
      }else{
        alert(res.data.message || "Signup falied")
      }
    }catch(error){
      console.log(error);
      alert("Error signing Up ,  please try again.  ")
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="flex flex-col bg-white p-10 rounded-2xl shadow-md w-96"
      onSubmit={handleSignup}>
        <h2 className="text-black font-extrabold text-2xl mb-6 text-center">Signup</h2>
        <input
          className='text-black border border-black mb-4 px-3 py-2 rounded'
          placeholder='Enter name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
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
          <p className='mt-'>Already have an account?<span className='text-blue-600'onClick={()=>navigate("/login")}> Login</span></p>

      </form>
    </div>
  );
};

export default Signup;
