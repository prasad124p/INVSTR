import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]= useState("")
 const navigate =useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="flex flex-col bg-white p-10 rounded-2xl shadow-md w-96">
        <h2 className="text-black font-extrabold text-2xl mb-6 text-center">Signup</h2>
        {/* <input
          placeholder='Enter name'
          value={name}
        /> */}
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
          <p className='mt-'>Already have an account?<a href="" className='text-blue-600'onClick={()=>navigate("./login")}> Login</a></p>

      </form>
    </div>
  );
};

export default Signup;
