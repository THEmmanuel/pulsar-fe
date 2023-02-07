import React from 'react';
import style from './NavBar.module.css';
import { useUser, UserButton } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
	const { user } = useUser();

	return (
		<nav className={style.NavBar}>
			<div className={style.NavContent}>
				<span>Page Title</span>

				<div className={style.NavIntroduction}>
					{
						user ?
							<div className={style.NavUserInfo}>
								<span className={style.NavIntro} >Hi {user.username}!</span>
								<UserButton />
							</div>
							:
							<Link to='/login'>
								<button>Login</button>
							</Link>
					}
				</div>
			</div>
		</nav>
	)
}

export default NavBar;