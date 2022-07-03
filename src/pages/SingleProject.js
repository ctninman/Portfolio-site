import React from 'react';

function SingleProject({project}) {
	return (
		<div>
			<h1>{project.appName}</h1>
			<img style={{width: '90%', marginLeft: '5%'}} src={project.thumbnail} />
		</div>
	);
}

export default SingleProject;