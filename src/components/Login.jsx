// npx json-server --watch db.json --port 3000 (is Used To Run The db.json File)
import './Login.css'; 

import axios from 'axios';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';




function Login() {

 const[userName,setUsername] = useState('');
  const[passWord,setPassWord] = useState('');
  const[email,setEmail]= useState('');
  const[retypepassword,setRetypepassword] = useState('');

  const HandleUserChange = (e) =>{
    setUsername(e.target.value);
  }
  const HandleEmailChange = (e) =>{
    setEmail(e.target.value);
  }
  const HandlePasswordChange = (e) =>{
    setPassWord(e.target.value);
  }
  const HandleRePasswordChange = (e) =>{
    setRetypepassword(e.target.value);
  }
  const HandleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/users",{userName,passWord,email,retypepassword})
    .then(response=>{
      console.log(response);
    }
    )
  }
  
  const Toastify = () => {

      if(userName !== null && email !== null && passWord !== null && retypepassword !== null &&
        userName !== "" && email !== "" && passWord !== "" && retypepassword !== ""  && passWord===retypepassword){
          toast.success("Login SuccessFully !", {
            position: "top-right", 
          });
    }
   
   else{
      toast.error("Fill The Correct InFormation !", {
        position: "top-right", 
        
      });
    }
}

   
 
  return (
    <div className='container'>
      <form method='post'  onSubmit={HandleSubmit}>
        <h1 className="Heading">Login</h1><br/>
        <label className="label" >UserName</label><br />
        <input type='text' value={userName} className="form-control" placeholder='Type Your UserName'onChange={HandleUserChange}></input>
        <label className="label">Email</label><br />
        <input type='email'  className="form-control" value={email} placeholder='Type Your Email'onChange={HandleEmailChange}></input>
        <label className="label">Password</label><br />
        <input type='password'  className="form-control" value={passWord} placeholder='Type Your Password'onChange={HandlePasswordChange}></input>
        <label className="label">Re-Type Password</label><br />
        <input type='password'  className="form-control" value={retypepassword} placeholder='Re-Type Password' onChange={HandleRePasswordChange}></input>
       <button className='btn' type='submit' onClick={Toastify}>Login</button>
       <ToastContainer />
       < p className='Paragraph'>Don't have an account? <Link to="/SignUp">Signup</Link></p>


        {/* <Link to="./SignUp">Signup</Link> */}
       
    
      </form>
    </div>
  );
}

export default Login;