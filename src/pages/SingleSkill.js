import React from 'react';

function SingleSkill({skill}) {
	return (
		<div className='comp-single-skill'>
			<img src={skill.skillSVG} alt={skill.skill} />
			<h3>{skill.skill}</h3>
		</div>
	);
}

export default SingleSkill;