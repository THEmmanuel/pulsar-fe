import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={style.NavBar}>
			<div className={style.NavContent}>
				<span>Page Title</span>

				<div className={style.NavIntroduction}>
					<div>Hi gabe</div>
					<button>Login</button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;