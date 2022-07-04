import React from 'react';

function SingleProjectThumb({project, setDisplayedProject}) {
	
	function handleProjectSelect () {
		setDisplayedProject(project)
	}
	
	return (
		<div className='project-thumb' onClick={handleProjectSelect}>
			<h1>{project.appName}</h1>
			<img src={project.thumbnail} />
		</div>
	);
}

export default SingleProjectThumb;