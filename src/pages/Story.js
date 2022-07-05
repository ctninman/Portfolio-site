import React from 'react';

function Story({displayedProject}) {
	return (
		<div>
			{displayedProject.description.map(description => (
				<p>{description}</p>
			))}
		</div>
	);
}

export default Story;