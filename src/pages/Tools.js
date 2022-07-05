import React from 'react';

function Tools({project}) {
	return (
		<div>
			<h2>GOAL: {project.goal}</h2>
			<ul>
				{project.techPoints.map(point => (
					<li key={point}>{point}</li>
				))}
			</ul>
		</div>
	);
}

export default Tools;