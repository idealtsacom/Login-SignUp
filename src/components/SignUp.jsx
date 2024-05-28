import './SignUp.css'; 

import axios from 'axios';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [userName, setUsername] = useState('');
  const [passWord, setPassWord] = useState('');

  const HandleUserChange = (e) => {
    setUsername(e.target.value);
  }
  
  const HandlePasswordChange = (e) => {
    setPassWord(e.target.value);
  }
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users", { userName, passWord })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  const Toastify = () => {
    if (userName !== "" && passWord !== "") {
      toast.success("Login Successful!", { position: "top-right" });
    } else {
      toast.error("Fill in the correct information!", { position: "top-right" });
    }
  }
  
  return (
    <div className='container2'>
      <form method='post' onSubmit={HandleSubmit}>
        <h1 className="Heading">SignUp</h1><br/>
        <label className="label" >UserName</label><br />
        <input type='text' value={userName} className="form-control" placeholder='Type Your UserName' onChange={HandleUserChange}></input>
        <label className="label">Password</label><br />
        <input type='password'  className="form-control" value={passWord} placeholder='Type Your Password'onChange={HandlePasswordChange}></input>
        <button className='btn' type='submit' onClick={Toastify}>SignUp</button>
        <ToastContainer />
      
      </form>
    </div>
  );
}

export default Signup;
