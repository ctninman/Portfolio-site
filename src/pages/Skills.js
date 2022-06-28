import React from 'react';
import SingleSkill from './SingleSkill.js';
import { allSkills } from './variables.js'

function Skills(props) {
	return (
		<div style={{backgroundColor: 'lightblue'}}>
			<h1>All My Skills</h1>
			{allSkills.map(skill => (
				<SingleSkill 
					key={skill.skill}
					skill={skill}
				/>
			))}
		</div>
	);
}

export default Skills;