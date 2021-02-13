import  React,{Fragment,useState} from 'react' 
import {useHistory} from 'react-router-dom'
import axios from "axios"

const LandingPage=()=>{
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
	const [user,setUser]=useState();
	let history = useHistory();

	const handleSubmit=async e=>{
		// const result = await fetch('http://localhost:5000/dash');
        //   const json = await result.json();
		//   console.log(json)
		// localStorage.setItem('user',json)
		// let data= localStorage.getItem('user')
		// console.log(data)
		// console.log(json)
		// const routeChange=()=>{
		// 	let path=`/dashboard`;
		// 	history.push(path)
		// }
		// routeChange()
		const m=localStorage.getItem('email')
		const p=localStorage.getItem('password')
		console.log(email)
		console.log(password)
		console.log(m)
		console.log(p)
		if(email===m&&password===p){
			let path='/dashboard'
			history.push(path)
		}
	};


	
	const registerPage=()=>{
		let path=`/register`;
		history.push(path)
	}

    return(
	
			<div class="lbody" >
<div class="container" id="container">
	<div class="form-container sign-up-container">
		
	</div>
	<div class="form-container sign-in-container">
		<form class= "lform"action="#"  >
			<h1 class="lh1">Sign in</h1>
			<input class="linput" type="email" placeholder="Email" value={email} onChange={({target})=>setEmail(target.value)} />
			<input class="linput" type="password" placeholder="Password" value ={password} onChange={({target})=>setPassword(target.value)}/>
			<a class="la"href="#">Forgot your password?</a>
			<button class="lbutton"onClick={handleSubmit}>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1 class="lh1">Welcome Back!</h1>
				<p class="lp">To keep connected with us please login with your personal info</p>
				<button class="lbutton" class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1 class="lh1">Hello, Friend!</h1>
				<p class="lp">Enter your personal details and start journey with us</p>
				<button class="lbutton" class="ghost" id="signUp" onClick={registerPage}>Sign Up</button>
			</div>
		</div>
	</div>
</div>


			</div>
    )
}
export default LandingPage;