import React from 'react';

function Features({project}) {
	return (
		<div>
			<ul>
				{project.features.map(feature => (
					<li key={feature}>{feature}</li>
				))}
			</ul>
		</div>
	);
}

export default Features;