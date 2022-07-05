import React, {useState, useEffect} from 'react';
import { allProjects } from './variables';
import SingleProject from './SingleProject';
import SingleProjectThumb from './SingleProjectThumb';

function Projects({projectRef}) {

	const [displayedProject, setDisplayedProject] = useState(null)
	const [selectedView, setSelectedView] = useState('story')

	const projectDiv = {
		backgroundColor: '#D295BF'
	}
	const projecth1 ={
		marginTop: '0px',
		marginBottom: '0px',
		paddingLeft: '20px'
	}

	useEffect (() => {
		setDisplayedProject(allProjects[0])
	}, [] )

	return allProjects ? (
		<div ref={projectRef} style={projectDiv}>
			<h1 style={projecth1}>MY PROJECTS</h1>
			<div className='comp-projects'>
				{allProjects.map(project => (
					<SingleProjectThumb 
						key={project.appName} 
						project={project}
						displayedProject={displayedProject}
						setDisplayedProject={setDisplayedProject}
						selectedView={selectedView}
						setSelectedView={setSelectedView}
					/>
				))}
			</div>
			<SingleProject 
				displayedProject={displayedProject}
				selectedView={selectedView}
				setSelectedView={setSelectedView}
			/>
		</div>
	) 
	: null
}

export default Projects;