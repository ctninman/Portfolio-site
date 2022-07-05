import React, { useState } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import Features from './Features'
import Tools from './Tools'

function SingleProject({project}) {

	const [selectedView, setSelectedView] = useState('video')

	return (
		<div className='single-project'>
			<img className='project-logo' src={project.logo} />
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<button onClick={() => setSelectedView('video')}>Video</button>
				<button onClick={() => setSelectedView('features')}>Features</button>
				<button onClick={() => setSelectedView('tools')}>Tools</button>
			</div>
			<div>
				{selectedView === 'video' ? <YoutubeEmbed embedId={project.youtubeEmbedID} /> : null }
				{selectedView === 'features' ? <Features /> : null}
				{selectedView === 'tools' ? <Tools /> : null}
			</div>
			{/* <img style={{width: '90%', marginLeft: '5%'}} src={project.thumbnail} /> */}
		</div>
	);
}

export default SingleProject;