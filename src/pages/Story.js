import React from 'react';

function Story({project}) {
	return (
		<div>
			{project.description.map(description => (
				<p>{description}</p>
			))}
		</div>
	);
}

export default Story;