import React from 'react';

function SingleProjectThumb({project}) {
	return (
		<div className='project-thumb'>
			<h1>{project.appName}</h1>
			<img src={project.thumbnail} />
		</div>
	);
}

export default SingleProjectThumb;