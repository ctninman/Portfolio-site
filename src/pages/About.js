import { useState, useEffect } from 'react';
import React from 'react';
import PortfolioBackground from '../images/Portfolio-background.png'

function About(props) {

	const greetings = ['Hi! I am', 'Ciao! Io sono', 'Hola! Yo soy', 'Bonjour! Je\'taime']

	const [currentGreeting, setCurrentGreeting] = useState(greetings[0])
	const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0)

	useEffect(() => {
    const interval = setInterval(() => {
			if (currentGreetingIndex < greetings.length) {
      	setCurrentGreeting(greetings[currentGreetingIndex])    
				setCurrentGreetingIndex(currentGreetingIndex + 1)
			} else { 
				setCurrentGreeting(greetings[0])
				setCurrentGreetingIndex(1)
			}
    }, 1000);
    return () => clearInterval(interval);
  }, [currentGreetingIndex]);

	return (
		<div>
			<h1 style={{backgroundColor: 'orange'}}>{currentGreeting} Christopher Ninman</h1>
			<div style={{width: '100%'}}>
				<img style={{width: '100%'}} src={PortfolioBackground} />
			</div>
		</div>
	);
}

export default About;