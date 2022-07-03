import React, {useState} from 'react';
import { allProjects } from './variables';
import SingleProject from './SingleProject';
import SingleProjectThumb from './SingleProjectThumb';

function Projects() {

	const [displayedProject, setDisplayedProject] = useState(allProjects[0])

	return (
		<>
			<h1>All My Projects</h1>
			<div className='comp-projects'>
				{allProjects.map(project => (
					<SingleProjectThumb 
						key={project.appName} 
						project={project}
					/>
				))}
			</div>
			<SingleProject project={displayedProject}/>
		</>
	);
}

export default Projects;