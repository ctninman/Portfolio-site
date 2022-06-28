import React from 'react';
import { allProjects } from './variables';
import SingleProject from './SingleProject';

function Projects() {
	return (
		<div style={{backgroundColor: 'yellow'}}>
			<h1>All My Projects</h1>
			{allProjects.map(project => (
				<SingleProject 
					key={project.appName} 
					project={project}
				/>
			))}
		</div>
	);
}

export default Projects;