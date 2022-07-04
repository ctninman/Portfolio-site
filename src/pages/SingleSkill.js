import React from 'react';

function SingleSkill({skill}) {

	const skillStyle = {
		width: skill.height * 1.5,
		height: skill.height * 1.5
	}

	const skillImageStyle =  {
		width: skill.height,
		height: skill.height,
		padding: skill.height / 4
	}

	return (
		<div className='comp-single-skill' style={skillStyle}>
			<img src={skill.skillSVG} alt={skill.skill} style={skillImageStyle} />
			<h3>{skill.skill}</h3>
			<h3>{skill.height}</h3>
		</div>
	);
}

export default SingleSkill;