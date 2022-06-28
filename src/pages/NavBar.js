import React from 'react';

function NavBar(props) {
	return (
		<div style={{backgroundColor: 'red'}}>
			<div>
				<h3>About</h3>
			</div>
			<div>
				<h3>Projects</h3>
			</div>
			<div>
				<h3>Blog</h3>
			</div>
			<div>
				<h3>Skills</h3>
			</div>
			<div>
				<h3>Contact</h3>
			</div>
		</div>
	);
}

export default NavBar;