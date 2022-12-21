import React from 'react';
import style from './Login.module.css';
import { SignIn } from '@clerk/clerk-react'

const Login = () => {
	return <div>
		<SignIn />
	</div>
}

export default Login;