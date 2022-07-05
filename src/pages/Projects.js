import React, {useState} from 'react';
// import { allProjects } from './variables';
import SingleProject from './SingleProject';
import SingleProjectThumb from './SingleProjectThumb';
import TimesTablesHome from '../images/Times-tables-master-home.png'
import KidsOutHome from '../images/Take-the-kids-out-home.png'
import WorldQuizHome from '../images/World-quiz-world-home.png'
import CurateifyHome from '../images/Curate-ify-home.png'
import CurateifyLogo from '../images/curate-ify-logo.png'
import WQWLogo from '../images/world-quiz-world-logo.png'
import TimesLogo from '../images/times-tables-master-logo.png'
import KidsLogo from '../images/take-the-kids-out-logo.png'

function Projects({projectRef}) {

	const allProjects = [
		{
			appName: 'Curate-ify',
			technologiesUsed: 'React, JavaScript, CSS, RubyOnRails, Heroku, Canva, Figma',
			videoLink: 'https://www.youtube.com/watch?v=sQUqpPwevWI&t=7s',
			youTubeLink: true,
			deployedSite: 'https://curate-ify.herokuapp.com/',
			gitHubLink: 'https://github.com/ctninman/curate-ify',
			slogan: 'Spotify Re-imagined for Album Collectors',
			description: [
				"I am a vinyl record collector. I used to be a CD collector. I love to physically interact with my music, pull the record out, set it on the turntable, and place the needle in position. I also love organizing all my physical albums on my shelves.",
				"But I also love having access to such a plethora of music digitally. However, my best friend and I have always complained about how much better Spotify could be to organize album collections, and albums that you'd like to hear, but don't necessarily want in your collection",
				"This app is my attempt to make Spotify exactly how I want it to be."
			],
			logo: CurateifyLogo,
			youtubeEmbedID: 'sQUqpPwevWI',
			thumbnail: CurateifyHome,
			features: [
				'Spotify reimagined for album collectors',
				'Users decide album tags and sort their collection by them',
				'Match with users based on specific albums in your collection'
			],
			story: 'If you build it...',
			goal: 'React frontend, Rails backend, design complex DB schema and perform actions using REST conventions',
			techPoints: [
				'Implemented OAuth 2.0 to allow users access to Spotify API and user information', 
				'Incorporated Web Playback SDK to integrate Spotify music player into application', 
				'Formulated API functionality using MVC pattern in Rails to perform full CRUD operations on data'
			]
		},
		{
			appName: 'World Quiz World',
			technologiesUsed: 'React, JavaScript, CSS, Node.js, Heroku',
			videoLink: 'https://www.youtube.com/watch?v=zqCPJJaqVRo',
			youTubeLink: true,
			deployedSite: 'https://world-quiz-world.herokuapp.com/',
			gitHubLink: 'https://github.com/ctninman/Phase_2_React_Project',
			slogan: 'How Much Do You Know?',
			description: [
				"Inspired by my 4 year-old son's love for country flags, I decided to create this project to help him learn and explore capitals, continents, and how many countries started with each letter of the alphabet. He got his high score up to 74 out of 100, including 25 out of 25 on the flag quiz. Not too shabby. It was an amazing experience to have him be the first tester of the site as it was being built.",
				"The was my first project built using React, with the additional goal of incorporating a complex outside API. World Quiz World uses the RestCountries API for all data. Thanks to all contributors!"
			],
			logo: WQWLogo,
			youtubeEmbedID: 'zqCPJJaqVRo',
			thumbnail: WorldQuizHome,
			features: [
				'Visually stunning site to learn flags, capitals, populations...',
				'Infinitely changing quizzes that track user high scores',
				'Filterable flash cards, population lists, and country data'
			],
			story: 'If you build it...',
			goal: 'Single-page routing React app that interacts with a robust outside API',
			techPoints: [
				'Utilized React state to create flashcards, filterable lists, and infinitely changing multiple-choice challenges',
				'Built local JSON server to allow users to create profile and save their high scores'
			]
		},
		{
			appName: 'Times Tables Master',
			technologiesUsed: 'React, JavaScript, CSS, Ruby, Rails, Canva, Heroku',
			videoLink: 'https://www.loom.com/share/098133a34fa04deebda97138ba99daab',
			youTubeLink: false,
			deployedSite: 'https://times-tables-master.herokuapp.com/',
			gitHubLink: 'https://github.com/ctninman/times-tables-master-project',
			slogan: 'Methodically Master Multiplication',
			description: [
				'As a 3rd grade teacher, I spend much of my time trying to help my students memorized their multiplication tables, to help them achieve continued success as the math curriculum progressed to multi-digit multiplication, long division, and beyond.',
				'I set out to build an application that I wish I had when I was teaching. An app to help my students see exactly which facts they struggle with, so they could focus in on them. I also wanted a way to keep track of their progress so I could intervene when necessary.',
				'This project is my realization of that idea.'
			],
			logo: TimesLogo,
			youtubeEmbedID: 'gl7TBVq3sP8',
			thumbnail: TimesTablesHome,
			features: [
				'Customized quizzes to track student multiplication mastery',
				'Teacher access to progress of each individual student',
				'Color-coded grid to help students focus on unknown facts'
			],
			story: 'If you build it...',
			goal: 'React frontend/Rails backend, protect user data with authorization and authentication using sessions',
			techPoints: [
				'Devised authorization setup to grant teacher access to student data after authentication using BCrypt',
				'Developed API routes to return ordered student data and custom CSS to color-code data in tables',
				'Engineered separate site experiences for teachers and students based on authorization level'
			]
		},
		{
			appName: 'Take The Kids Out',
			technologiesUsed: 'React, JavaScript, CSS, Ruby, ActiveRecord, Heroku',
			videoLink: 'https://www.loom.com/share/098133a34fa04deebda97138ba99daab',
			youTubeLink: false,
			deployedSite: 'https://times-tables-master.herokuapp.com/',
			gitHubLink: 'https://github.com/ctninman/Take-The-Kids-Out-Phase3-Project',
			slogan: 'Find Fun For The Kids (AND YOU TOO!)',
			description: [
				'I live in the biggest city in the US, with my wife and our 5 year-old. I thought it would be easy to find something interesting to do with your child anytime you wanted, but it is just never easy to find an activity that seems enjoyable and worth the effort.',
				'So I set out to build an application that allows users to add locations, write reviews and leave scores for multiple age levels. This allows users to search for the locations with the highest score for their own child\'s age group, and also lets you see how enjoyable other users thought it was for adults as well.'
			],
			logo: KidsLogo,
			youtubeEmbedID: 'd9ZfHzMURIw',
			thumbnail: KidsOutHome,
			features: [
				'Find enjoyable experiences for both children and parents',
				'Arrange locations by ratings and reviews for varied age levels',
				'Save places visited, favorites, and locations to visit next'
			],
			story: 'If you build it...',
			goal: 'Build API using ActiveRecord and create relationships and save user inputted data to support React frontend',
			techPoints: [
				'Custom API calls to return ordered lists of age-specific activities based on user scores',
				'Users create locations in their city which are updated with other users’ scores and reviews',
				'ActiveRecord associations utilizing SQLite save user favorite locations, places visited, and upcoming adventures'
			]
		}
	]
	

	const [displayedProject, setDisplayedProject] = useState(allProjects[0])
	const [selectedView, setSelectedView] = useState('story')

	const projectDiv = {
		backgroundColor: '#D295BF'
	}
	const projecth1 ={
		marginTop: '0px',
		marginBottom: '0px',
		paddingLeft: '20px'

	}

	return (
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
	);
}

export default Projects;