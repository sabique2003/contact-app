import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { checkEmailApi,registerApi } from '../Services/allApis';


function Register() {
    const [user,setUser] = useState({
        username:"",email:"",password:""
})
    const nav=useNavigate()

    const handleRegister=async()=>{
        console.log(user);
        const {username,email,password}=user
        if(!username || !email || !password ){
            toast.warn("enter valid inputs")
        }
        else{
            const result=await checkEmailApi(email)
            console.log(result);
            if (result.length>0){
                toast.warning("Email is already in use!!")
            }
            else{
                const result=await registerApi(user)
                if(result.status==201){
                    toast.success("Success")
                    setUser({
                        email:"",username:"",password:""
                    })
                    nav('/log')

                }
                else{
                    toast.error("Registration Failed")
                    console.log(result);
                    
                }
            }
        }
        
    }
  return (
    
    <>
    <div className="d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
        <div className="w-75 border bg-light shadow p-5">
            <h1>Register</h1>
            <input type="text" onChange={(e)=>setUser({...user,email:e.target.value})} className='form-control mb-3' placeholder='Enter Email ID' />
            <input type="text" onChange={(e)=>setUser({...user,username:e.target.value})} className='form-control mb-3' placeholder='Enter username' />
            <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} className='form-control mb-3' placeholder='Confirm Password' />
            <div className="d-flex justify-content-between">
            <button className='btn btn-info' onClick={handleRegister}>Register</button>
            <Link to='/log' className='text-info'>Already a user?</Link>
            </div>
        </div>

    </div>
    </>
  )
}

export default Register