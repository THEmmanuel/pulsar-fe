import React from 'react';
import style from './NavBar.module.css';
import { useUser, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
	const { user } = useUser();

	return (
		<nav className={style.NavBar}>
			<div className={style.NavContent}>
				<div className={style.NavIntroduction}>
					{/* <ConnectButton /> */}
					{
						user ? (
							<div className={style.NavUserInfo}>
								<span className={style.NavIntro}>Hi {user.username}!</span>
								<UserButton />
							</div>
						) : (
							<Link to='/login'>
								<button className={style.LoginButton}>Login</button>
							</Link>
						)
					}
				</div>
			</div>
		</nav>
	)
}

export default NavBar;
