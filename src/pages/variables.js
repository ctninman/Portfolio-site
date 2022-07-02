export const blogPosts = [
	{
		date: 'June 14, 2022',
		title: 'CSS Styled React Components',
		introParagraph: "You're making React Components that have all the information that you had planned. The problem is that they're not looking how you had envisioned. We'll be taking a look at the options of styling your components without the need to download outside libraries.",
		image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--T1umE9P8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h3n5d6z6nov7uyorse5q.JPG'
	},
	{
		date: 'June 13, 2022',
		title: 'VSCode Like a Pro on Your Mac',
		introParagraph: "You’ve made the big decision to learn how to code. Your workspace is set up and you have started learning some of the big concepts of programming. You watch as your instructors or favorite YouTube teachers jump through their code with speed and wonder how they did it.",
		image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gPChzC-g--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v33ckyw46m67ugc6n8kk.jpg'
	}
]

export const allProjects = [
	{
		appName: 'Curate-ify',
		technologiesUsed: 'React, JavaScript, CSS, RubyOnRails, Heroku, Canva, Figma',
		videoLink: 'https://www.youtube.com/watch?v=sQUqpPwevWI&t=7s',
		youTubeLink: true,
		deployedSite: 'https://curate-ify.herokuapp.com/',
		gitHubLink: 'https://github.com/ctninman/curate-ify',
		slogan: 'Spotify Re-imagined for Album Collectors',
		description: '',
		features: [

		],
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
		slogan: '',
		description: '',
		features: [

		],
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
		description: '',
		features: [

		],
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
		slogan: '',
		description: '',
		features: [

		],
		goal: 'Build API using ActiveRecord and create relationships and save user inputted data to support React frontend',
		techPoints: [
			'Custom API calls to return ordered lists of age-specific activities based on user scores',
			'Users create locations in their city which are updated with other users’ scores and reviews',
			'ActiveRecord associations utilizing SQLite save user favorite locations, places visited, and upcoming adventures'
		]
	}
]


export const allSkills = [
	{
		skill: 'React',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
	},
	{
		skill: 'RubyOnRails',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg'
	},
	{
		skill: 'HTML5',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
	},
	{
		skill: 'CSS3',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
	},
	{
		skill: 'JavaScript',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
	},
	{
		skill: 'Canva',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
	},
	{
		skill: 'BootStrap',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
	},
	{
		skill: 'Figma',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
	},
	{
		skill: 'Gatsby',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg'
	},
	{
		skill: 'Github',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
	},
	{
		skill: 'Heroku',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg'
	},
	{
		skill: 'NodeJS',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
	},
	{
		skill: 'PostgreSQL',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
	},
	{
		skill: 'Rails',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'
	},
	{
		skill: 'SQLite',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'
	},
	{
		skill: 'VSCode',
		skillSVG: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
	},
]