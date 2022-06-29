import React from 'react';
import SingleSkill from './SingleSkill.js';
import { allSkills } from './variables.js'

function Skills(props) {
	return (
		<>
		<h1>Skills</h1>
		<div className='comp-skills'>
			
			{allSkills.map(skill => (
				<SingleSkill 
					key={skill.skill}
					skill={skill}
				/>
			))}
		</div>
		</>
	);
}

export default Skills;