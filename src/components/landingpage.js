import  React,{Fragment,useState} from 'react' 
import {useHistory} from 'react-router-dom'

const LandingPage=()=>{

let history = useHistory();
	const routeChange=()=>{
		let path=`/register`;
		history.push(path)
	}

    return(
			<div >
<div class="container" id="container">
	<div class="form-container sign-up-container">
		
	</div>
	<div class="form-container sign-in-container">
		<form action="#" >
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button onClick={routeChange}>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
<footer>
	<p>
	Done by Saichaitanya Muthyala
	</p>
</footer>

			</div>
    )
}
export default LandingPage;