import { useState } from "react";

import { Link } from "react-router-dom";


export function SignUp() {
const [signUpData,setSignUpData] = useState({
name:"",
  email:"",
  password:""
})



  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]:e.target.value
    })
     
    
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(signUpData);
   

    

    
  
    
  };



  return (
    <div className="min-h-[90vh] w-full   relative flex flex-col items-center justify-center antialiased">
      
     <div>
     
<div className="min-w-[20rem] lg:w-[350px] lg:py-6 relative flex flex-col p-4 rounded-md text-black bg-zinc-100 z-50">
  <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome to <span className="text-[#000]">RUNO</span></div>
  <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Login here</div>
  <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

  

    <div className="block relative"> 
    
     <input type="email" id="email" name="email" value={signUpData.email}  className="h-10 w-full  rounded px-2 border" placeholder="Email" onChange={handleChange} />
    </div>
    <div className="block relative"> 
     <input  type="password" id="password" name="password" value={signUpData.password} className="h-10 w-full rounded px-2 border" placeholder="Password"  onChange={handleChange} />
      
    </div>
    {/* <div>
      <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
      </a></div> */}
    <button type="submit" className="bg-black hover:bg-gray-900 active:bg-black w-max m-auto px-6 py-3 mt-1  transition-colors rounded text-white text-sm font-normal">Login</button>
  </form>
  <div className="text-sm text-center mt-[1.6rem]">Dont have an account? <Link className="text-sm text-[#7747ff]" to="/signup">SignUp</Link></div>
</div>



     </div>
    
    </div>
  );
}
