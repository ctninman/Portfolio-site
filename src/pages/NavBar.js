import React, { useRef } from 'react';

function NavBar({aboutRef, projectRef, blogRef}) {

	// const handleScroll = (ref) {
	// 	blogRef.current.scrollIntoView({ behavior: 'smooth' })
	// }

	const scrollToElement = () => blogRef.current.scrollIntoView();

	return (
		<div className='comp-navbar'>
			<div>
				<h3>ABOUT</h3>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div>
				<h3>PROJECTS</h3>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div onClick={scrollToElement}>
				<h3>BLOG</h3>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div>
				<h3>SKILLS</h3>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div>
				<h3>CONTACT</h3>
			</div>
		</div>
	);
}

export default NavBar;