import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setUser } from "../app/slice/user/userSlice";
export function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);  
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setloginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const res = await fetch('http://localhost:5000/api/auth/login',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify(
            loginData,
            
        ),
        credentials: 'include', 
    })

    const data = await res.json()
    if(!data.success) {

      setLoading(false)
      setloginData({
          email:'',
          password:''
      })
      return toast.error(data.message)
    }else{
    setLoading(false)
      dispatch(setUser(data.user))
      toast.success(data.message)
      setloginData({
          email:'',
          password:''
      })

      navigate('/')
    }
  };

  return (
    <div className="min-h-[90vh] w-full   relative flex flex-col items-center justify-center antialiased">
      <div>
        <div className="min-w-[20rem] lg:w-[350px] lg:py-6 relative flex flex-col p-4 rounded-md text-black bg-zinc-100 z-50">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome to <span className="text-[#000]">RUNO</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Login here
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="block relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={loginData.email}
                className="h-10 w-full  rounded px-2 border"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="block relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                value={loginData.password}
                className="h-10 w-full rounded px-2 border"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            {/* <div>
      <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
      </a></div> */}
            <button
              type="submit"
              disabled={loading}
              className="bg-black hover:bg-gray-900 active:bg-black w-max m-auto px-6 py-3 mt-1  transition-colors rounded text-white text-sm font-normal"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Dont have an account?{" "}
            <Link className="text-sm text-[#7747ff]" to="/signup">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
