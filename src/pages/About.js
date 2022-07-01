import { useState, useEffect } from 'react';
import React from 'react';
import TopLayer from './TopLayer';
import PortfolioBackground from '../images/Portfolio-background.png'
import PortfolioEducation from '../images/Portfolio-toplevel-education.png'
import PortfolioMetal from '../images/Portfolio-toplevel-metal.png'


function About(props) {

	// const greetings = ['Hi! I am', 'Ciao! Io sono', 'Hola! Yo soy', 'Bonjour! Je\'taime']
	const aboutTraits = [
		{description: 'creative educator', image: PortfolioEducation}, 
		{description: 'heavy-metal guitarist', image: PortfolioMetal}
	]

	// const [currentGreeting, setCurrentGreeting] = useState(greetings[0])
	// const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0)
	const [currentTrait, setCurrentTrait] = useState(aboutTraits[0])
	const [currentTraitIndex, setCurrentTraitIndex] = useState(0)
	const [toggleLayer, setToggleLayer] = useState(true)
	const [showLayer, setShowLayer] = useState(true)
	const [rerenderImage, setRerenderImage] = useState(false)

	const parentDiv = {
		position: 'relative',
		top: '0',
		left: '0',
		width: '100%'
	}
	const bottomLayer = {
		position: 'relative',
		top: '0',
		left: '0',
		width: '100%'
	}
	const topLayer = {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%'
	}

	// useEffect(() => {
  //   const interval = setInterval(() => {
	// 		if (currentGreetingIndex < greetings.length) {
  //     	setCurrentGreeting(greetings[currentGreetingIndex])    
	// 			setCurrentGreetingIndex(currentGreetingIndex + 1)
	// 		} else { 
	// 			setCurrentGreeting(greetings[0])
	// 			setCurrentGreetingIndex(1)
	// 		}
  //   }, 1500);
  //   return () => clearInterval(interval);
  // }, [currentGreetingIndex]);

	useEffect(() => {
		// setShowLayer(false)
		setToggleLayer(false)
    const photoInterval = setInterval(() => {
			if (currentTraitIndex < aboutTraits.length) {
      	setCurrentTrait(aboutTraits[currentTraitIndex])    
				setCurrentTraitIndex(currentTraitIndex + 1)
			} else { 
				setCurrentTrait(aboutTraits[0])
				setCurrentTraitIndex(1)
			}
    }, 4000);
		setRerenderImage(!rerenderImage)
    return () => clearInterval(photoInterval);
  }, [currentTraitIndex]);

	useEffect (() => {
		setShowLayer(true)
		setToggleLayer(true)
		const timer = setTimeout(() => setShowLayer(false), 3500);
    return () => clearTimeout(timer);
	}, [rerenderImage] )

	return (
		<div className='comp-about'>
			<div className='about-left'>
				{/* <h2>{currentGreeting}</h2> */}
				<h2>Hello. I am</h2>
				<h1>Christopher Ninman</h1>
				<h2>I am a</h2>
				<h2>full-stack developer /</h2>
				<h2>software engineer /</h2>
				<h2>{currentTrait.description}</h2>
			</div>
			<div className='about-right' style={parentDiv}>
				<img style={bottomLayer} src={PortfolioBackground} />
				{toggleLayer ? <TopLayer topLayer={topLayer} showLayer={showLayer} currentTrait={currentTrait}/> : null }
			</div>
			{/* <div class="parent">
      <img class="image1" src="/uploads/media/default/0001/01/25acddb3da54207bc6beb5838f65f022feaa81d7.jpeg" />
      <img class="image2" src="/uploads/media/default/0001/01/25acddb3da54207bc6beb5838f65f022feaa81d7.jpeg" />
    </div> */}
		</div>
	);
}

export default About;