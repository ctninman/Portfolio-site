import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

function SingleProject({project}) {
	return (
		<div>
			<img className='project-logo' src={project.logo} />
			<YoutubeEmbed embedId={project.youtubeEmbedID} />
			{/* <img style={{width: '90%', marginLeft: '5%'}} src={project.thumbnail} /> */}
		</div>
	);
}

export default SingleProject;