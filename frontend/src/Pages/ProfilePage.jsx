import { useDispatch } from "react-redux"
import { clearUser } from "../app/slice/user/userSlice"
import { useNavigate } from "react-router-dom"


function ProfilePage() {
const dispatch = useDispatch()
const navigate = useNavigate()

  const handleClick=()=>{
  
dispatch(clearUser())
navigate('/')
  }
  return (
    <div>
     
       <button className="px-2 py-3 bg-black text-white rounded mt-2 ml-10 hover:bg-red-600 transition-all" onClick={handleClick}>Logout</button>     
        </div>
  )
}

export default ProfilePage