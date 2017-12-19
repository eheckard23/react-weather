import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
	<nav>
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/weather'>Weather</Link></li>
		</ul>
	</nav>
)

export default HeaderNav;