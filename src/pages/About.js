import { useState, useEffect, useRef } from 'react';
import React from 'react';
import TopLayer from './TopLayer';
import PortfolioBackground from '../images/Portfolio-background.png'
import PortfolioEducation from '../images/Portfolio-toplevel-education.png'
import PortfolioMetal from '../images/Portfolio-toplevel-metal.png'
import PortfolioVolleyball from '../images/Portfolio-toplevel-volleyball.png'
import PortfolioMusic from '../images/Portfolio-toplevel-music.png'


function About({aboutRef}) {

	const firstUpdate = useRef(true)
  const secondUpdate = useRef(true)
	const thirdUpdate = useRef(true)
  const fourthUpdate = useRef(true)

	const aboutTraits = [
		{description: 'diverse degree holder', image: PortfolioEducation, paragraph: 'My college career began with 6 hours a day of classical guitar practice. An acquaintance asked me at my senior recital if I wanted to teach with her, and I spent the next 10 years teaching in a preschool classroom, and mannying in NYC. I returned to get my master\'s in education, and taught until teaching during the pandemic showed me how much I loved to create educational tech tools for my students to learn.'}, 
		{description: 'heavy-metal guitarist', image: PortfolioMetal, paragraph: 'A purchase of an Ozzfest live VHS tape was my gateway into the world of heavy metal, and the beginning of my love of music. My best friends in high school and I played thrash and melodic death metal at our small private school. I went through a phase where I thought I shouldn\'t listen to metal because I was grown-up. I now realized the error in my thinking, and am hoping to get loud again once we move out of our 1-bedroom in Brooklyn.'},
		{description: 'volleyball player', image: PortfolioVolleyball, paragraph: 'I often get asked where I met my wife. The answer is, of course, at the Dodge YMCA playing volleyball. And we\'re actually one of six couples that got married through playing together at the YMCA. We still love playing, but most of the time is now at the park, where our 5 year-old volleyball obsessed son can play as well.'},
		{description: 'music aficionado', image: PortfolioMusic, paragraph: 'I am learning to be as minimalist as I can, but there is one area where I am not interested. That\'s my collection vinyl records. In my free time I am searching RateYourMusic for the best albums of each year and giving them a spin. My final project at the Flatiron School was building a version of Spotify for album collectors. Check it out in my projects below.'}
	]

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
					setCurrentTraitIndex(currentTraitIndex + 1)
				} else { 
					setCurrentTraitIndex(0)
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

	return (
		<div>
			<div ref={aboutRef} className='comp-about'>
				<div className='about-left'>
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