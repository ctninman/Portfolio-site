import { useState, useEffect, useRef } from 'react';
import React from 'react';
import TopLayer from './TopLayer';
import PortfolioBackground from '../images/Portfolio-background.png'
import PortfolioEducation from '../images/Portfolio-toplevel-education.png'
import PortfolioMetal from '../images/Portfolio-toplevel-metal.png'
import PortfolioVolleyball from '../images/Portfolio-toplevel-volleyball.png'
import PortfolioMusic from '../images/Portfolio-toplevel-music.png'


function About(props) {

	const firstUpdate = useRef(true)
  const secondUpdate = useRef(true)
	const thirdUpdate = useRef(true)
  const fourthUpdate = useRef(true)

	// const greetings = ['Hi! I am', 'Ciao! Io sono', 'Hola! Yo soy', 'Bonjour! Je\'taime']
	const aboutTraits = [
		{description: 'creative educator', image: PortfolioEducation, paragraph: 'I am amazing.'}, 
		{description: 'heavy-metal guitarist', image: PortfolioMetal, paragraph: 'I am so cool.'},
		{description: 'volleyball player', image: PortfolioVolleyball, paragraph: 'What a man!'},
		{description: 'music aficionado', image: PortfolioMusic, paragraph: 'Lean, mean, bean machine'}
	]

	// const [currentGreeting, setCurrentGreeting] = useState(greetings[0])
	// const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0)
	const [currentTrait, setCurrentTrait] = useState(aboutTraits[0])
	const [currentTraitIndex, setCurrentTraitIndex] = useState(0)
	const [fadeInClass, setFadeInClass] = useState(true)
	const [showTopLayer, setShowTopLayer] = useState(false)
	const [rerenderImage, setRerenderImage] = useState(false)
	const [triggerSecondEffect, setTriggerSecondEffect] = useState(false)
	const [triggerThirdEffect, setTriggerThirdEffect] = useState(false)
	const [triggerFourthEffect, setTriggerFourthEffect] = useState(false)
	const [resetLoop, setResetLoop] = useState(false)
	const [pauseSlides, setPauseSlides] = useState(false)
	const [checkPause, setCheckPause] = useState(false)

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

	useEffect (() => {
		const showTimeout = setTimeout(() => {
			setShowTopLayer(true)
			setTriggerSecondEffect(!triggerSecondEffect)
		}, 1000)
		return () => clearTimeout(showTimeout)
	} , [resetLoop] )


	useEffect (() => {
		if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
		}
		const secondTimeout = setTimeout(() => {
			setCheckPause(!checkPause)
			// checkForPaused()
			// setShowTopLayer(false)
			// setFadeInClass(false)
			// setTriggerThirdEffect(!triggerThirdEffect)
		}, 4000)
		return () => clearTimeout(secondTimeout)
	} , [triggerSecondEffect] )

	useEffect (() => {
		if (fourthUpdate.current) {
      fourthUpdate.current = false;
      return;
		}
		if (pauseSlides) {
			return
		} else {
			checkForPaused()
		}
	}, [checkPause] )
	
	
		useEffect (() => {
			if (secondUpdate.current) {
				secondUpdate.current = false;
				return;
			}
			setShowTopLayer(true)
			if (!pauseSlides) {
				if (currentTraitIndex < aboutTraits.length-1) {
					// setCurrentTrait(aboutTraits[currentTraitIndex])    
					setCurrentTraitIndex(currentTraitIndex + 1)
					// setRerenderImage(!rerenderImage)
				} else { 
					setCurrentTraitIndex(0)
					// setCurrentTraitIndex(1)
					// setRerenderImage(!rerenderImage)
				}
				const thirdTimeout = setTimeout(() => {
					setTriggerFourthEffect(!triggerFourthEffect)
				}, 350)
				return () => clearTimeout(thirdTimeout)
			}
		}, [triggerThirdEffect] )


	useEffect (() => {
		if (thirdUpdate.current) {
      thirdUpdate.current = false;
      return;
    }
		setFadeInClass(true)
		setCurrentTrait(aboutTraits[currentTraitIndex])    
	
		setResetLoop(!resetLoop)
	}, [triggerFourthEffect] )

	function handlePauseSlides () {
		setPauseSlides(true)
	}

	function handleContinueSlides () {
		setPauseSlides(false)
		setTriggerThirdEffect(!triggerThirdEffect)
	}

	function checkForPaused () {
		if (!pauseSlides) {
			setShowTopLayer(false)
			setFadeInClass(false)
			setTriggerThirdEffect(!triggerThirdEffect)
		}
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

	// useEffect(() => {
	// 	// setShowLayer(false)
	// 	setToggleLayer(false)
  //   const photoInterval = setInterval(() => {
	// 		if (currentTraitIndex < aboutTraits.length) {
  //     	setCurrentTrait(aboutTraits[currentTraitIndex])    
	// 			setCurrentTraitIndex(currentTraitIndex + 1)
	// 			setRerenderImage(!rerenderImage)
	// 		} else { 
	// 			setCurrentTrait(aboutTraits[0])
	// 			setCurrentTraitIndex(1)
	// 			setRerenderImage(!rerenderImage)
	// 		}
  //   }, 4000);
		
  //   return () => clearInterval(photoInterval);
  // }, [currentTraitIndex]);

	// useEffect (() => {
	// 	setShowLayer(true)
	// 	setToggleLayer(true)
	// 	const timer = setTimeout(() => setToggleLayer(false), 3500);
  //   return () => clearTimeout(timer);
	// }, [rerenderImage] )
	


	

	return (
		<div>
			<div className='comp-about'>
				<div className='about-left'>
					{/* <h2>{currentGreeting}</h2> */}
					<h2>Hello. I am</h2>
					<h1>Christopher Ninman</h1>
					<h2>I am a</h2>
					<h2>full-stack developer /</h2>
					<h2>software engineer /</h2>
					<h2>{currentTrait.description}</h2>
					{!pauseSlides 
							? 
						<button onClick={handlePauseSlides}>TELL ME MORE</button> 
							:
						<button onClick={handleContinueSlides}>CONTINUE</button> 
					}
				</div>
				<div className='about-right' style={parentDiv}>
					<img style={bottomLayer} src={PortfolioBackground} />
					{showTopLayer ? <TopLayer topLayer={topLayer} fadeInClass={fadeInClass} currentTrait={currentTrait}/> : null }
				</div>
				{/* <div class="parent">
				<img class="image1" src="/uploads/media/default/0001/01/25acddb3da54207bc6beb5838f65f022feaa81d7.jpeg" />
				<img class="image2" src="/uploads/media/default/0001/01/25acddb3da54207bc6beb5838f65f022feaa81d7.jpeg" />
			</div> */}
			</div>
			<div className='comp-about' style={{marginTop: '-10px'}}>
				{pauseSlides
						?
					<p>{currentTrait.paragraph}</p>
						:
					<p>Career-changing educator with passion and talent for using technology to create inspiring educational material and websites to foster engagement and learning. Dedicated to following all necessary goals first, and then reaching well beyond. Not limited to, but skilled in React, JavaScript, Rails, Ruby, and CSS, and always fascinated to learn other languages and frameworks.  Hard-working, meticulous, and creative, but above all, an empathetic, kind, and collaborative member of his surrounding community.</p>
				}
			</div>
		</div>
	);
}

export default About;



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

	// function nextTrait () {
	// 	setCurrentTrait(aboutTraits[currentTraitIndex])    
	// 	setCurrentTraitIndex(currentTraitIndex + 1)
	// }

	// function returnToFirstTrait () {
	// 	setCurrentTrait(aboutTraits[0])
	// 	setCurrentTraitIndex(1)
	// }

	// useEffect (() => {
	// 	const renderInterval = setInterval(() => {
	// 		setRerenderImage(rerenderImage + 1)
	// 		console.log('rerender', rerenderImage)
	// 		setToggleLayer(true)
	// 		setShowLayer(true)
  //   }, 4000);
	// 	return () => clearInterval(renderInterval);
	// }, [] )

	// useEffect (() => {
	// 	const renderTimeout = setTimeout(() => {
	// 		// setShowLayer(false)
	// 		setToggleLayer(false)
	// 		// console.log('rerender')
  //   }, 3500);
	// 	return () => clearTimeout(renderTimeout);
	// }, [rerenderImage] )



	// useEffect(() => {
	// 	// setShowLayer(false)
	// 	setToggleLayer(false)
  //   const photoInterval = setInterval(() => {
	// 		if (currentTraitIndex < aboutTraits.length) {
	// 			nextTrait()
	// 		} else { 
	// 			returnToFirstTrait()
	// 		}
  //   }, 4000);
	// 	setRerenderImage(!rerenderImage)
  //   return () => clearInterval(photoInterval);
  // }, [currentTraitIndex]);

	// useEffect (() => {
	// 	// setShowLayer(true)
	// 	setToggleLayer(true)
	// 	// const timer = setTimeout(() => setToggleLayer(false), 3900);
	// 	const layerTimer = setTimeout(() => setShowLayer(false), 3500);
  //   return () => {
	// 	// 	clearTimeout(timer);
	// 		clearTimeout(layerTimer)
	// 	}
	// }, [rerenderImage] )