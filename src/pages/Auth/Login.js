import React from 'react';
import style from './Login.module.css';
import { useUser, SignIn } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const { user } = useUser();
	const navigate = useNavigate();
	const goHome = () => {
		navigate('/home')
	}

	if (user) {
		goHome()
	}

	return (
		<div className={style.AuthContainer}>
			<SignIn />
		</div>
	)
};

export default Login;