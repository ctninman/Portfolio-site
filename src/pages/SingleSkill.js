import React from 'react';

function SingleSkill({skill}) {
	return (
		<div>
			<h3>{skill.skill}</h3>
			<img src={skill.skillSVG} alt={skill.skill} />
		</div>
	);
}

export default SingleSkill;