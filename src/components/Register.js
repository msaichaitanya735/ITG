import  React,{Fragment,Component,useState} from 'react' 
import { Link,useHistory } from 'react-router-dom'

import axios from "axios";

const Register=()=>{
    let history = useHistory();
  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[mob_no,setMob_no]=useState("")
  const[age,setAge]=useState("")
  const[password,setPassword]=useState("")
  const onSubmitForm= async e=>{
      e.preventDefault()
      try {
          const body={name,email,mob_no,age}
          const response= await fetch("http://localhost:5000/register",{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(body)
          })
          console.log(response)
      } catch (err) {
          console.log(err.message)
      }
      let path='/'
      history.push(path)

  }

  const onnameChange=e=>{
      localStorage.setItem('name',e.target.value)
      setName(e.target.value)
  }
  const onemailChange=e=>{
    localStorage.setItem('email',e.target.value)
    setEmail(e.target.value)
}
const onmobChange=e=>{
    localStorage.setItem('mob',e.target.value)
    setMob_no(e.target.value)
}
const onageChange=e=>{
    localStorage.setItem('age',e.target.value)
    setAge(e.target.value)
}
const onpasswordChange=e=>{
    localStorage.setItem('password',e.target.value)
    setPassword(e.target.value)
}


        return (
            <div class="lbody">
      <div class="container right-panel-active" id="container">
              <div class="form-container sign-up-container">
                  <form class="lform" action="#" >
                      <h1>Create Account</h1>
                      <span/>
                      <input class="linput" type="text" placeholder="Name" value ={name} 
                      onChange={onnameChange}/>
                      <input class="linput" type="email" placeholder="Email"value ={email} onChange={onemailChange} />
                      <input class="linput" type="tel" placeholder="Mob No" value={mob_no} onChange={onmobChange}/>
                      <input class="linput" type="number" placeholder="Age" value={age} onChange={onageChange}/>
                      <input class="linput" type="password" placeholder="Password" value={password} onChange={onpasswordChange}/>

                      <Link to="/" > <button class ="lbutton"onClick={onSubmitForm}>Sign Up</button></Link>
                      
                  </form>
              </div>
             
              <div class="overlay-container">
                  <div class="overlay">
                      <div class="overlay-panel overlay-right">
                          <h1>Welcome Back!</h1>
                          <p>To keep connected with us please login with your personal info</p>
                          <button class="ghost" id="signIn">
                          Sign In
                          </button>
                      </div>
                      <div class="overlay-panel overlay-left">
                          <h1 class="lh1">Welcome Back!</h1>
                          <p class="lp">Enter your personal details and start journey with us</p>
                          
                          <Link to="/"><button class="lbutton"class="ghost" id="signIn" >Sign In</button></Link>
                      </div>
                  </div>
              </div>

          </div>
      
</div>
      )
}

export default Register;
