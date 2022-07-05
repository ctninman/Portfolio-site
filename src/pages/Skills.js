import React from 'react';
import SingleSkill from './SingleSkill.js';
// import { allSkills } from './variables.js'

function Skills({skillRef}) {

	const allSkills = [
		{
			skill: 'React',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			height: 100
		},
		{
			skill: 'RubyOnRails',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
			height: 80
		},
		{
			skill: 'HTML5',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
			height: 80
		},
		{
			skill: 'CSS3',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
			height: 90
		},
		{
			skill: 'JavaScript',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
			height: 90
		},
		{
			skill: 'Canva',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
			height: 70
		},
		{
			skill: 'BootStrap',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
			height: 50
		},
		{
			skill: 'Figma',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
			height: 70
		},
		{
			skill: 'Gatsby',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg',
			height: 50
		},
		{
			skill: 'Github',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
			height: 60
		},
		{
			skill: 'Heroku',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
			height: 60
		},
		{
			skill: 'NodeJS',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
			height: 50
		},
		{
			skill: 'PostgreSQL',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
			height: 60
		},
		{
			skill: 'Ruby',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
			height: 80
		},
		{
			skill: 'SQLite',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
			height: 60
		},
		{
			skill: 'VSCode',
			skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
			height: 80
		},
	]

	const skillsH1 = {
		backgroundColor: '#D295BF',
		marginBottom: '0px',
		marginTop: '0px',
		paddingLeft: '20px'
	}
	return (
		<div ref={skillRef}>
		<h1 style={skillsH1}>SKILLS</h1>
		<div className='comp-skills'>
			{/* <div> */}
				{/* <h1></h1> */}
				{allSkills.map(skill => (
					<SingleSkill 
						key={skill.skill}
						skill={skill}
					/>
				))}
			{/* </div> */}
		</div>
		</div>
	);
}

export default Skills;