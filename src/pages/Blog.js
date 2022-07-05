import React from 'react';
// import {blogPosts} from './variables.js'
import BlogPost from './BlogPost'

function Blog({blogRef}) {

	const blogPosts = [
		{
			date: 'June 14, 2022',
			title: 'Consider This Before Starting Your Spotify API Project',
			introParagraph: "The Spotify API is home to an incredible wealth of information about artists, albums, and songs, as well as individual Spotify users. If you are a Spotify user, you know obviously know how amazing it is to have access to almost any music ever released in one place. As a developer, it is exciting to know that all that information is available for you to use, too. But not in the snap of a finger. If you have not tried your hand yet at developing an app using the Spotify API, this article will attempt to tackle some of what you can expect, and hopefully help you decide if the effort is worth your time.",
			image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--SdEOitOG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y2p1w23zoieccj6skyn9.jpg'
		},
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
		},
		{
			date: 'April 7, 2022',
			title: 'Building a Rails API to Track Student Progress',
			introParagraph: "What is the most difficult thing about being a teacher? Actually, that's a trick question. Everything is difficult, hence, my switch to becoming a software developer. But one of those difficult teacher tasks is gathering data, as a means to guide your instruction, along with a way to show parents that you know their children well. As a teacher, I was always hoping to find the balance of a fun, engaging app that actually taught my students, while giving me some information about them after they finished.",
			image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ifxLzRAa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ilf22uuwnozmogxarshw.jpg'
		},
		{
			date: 'February 10, 2022',
			title: 'Sinatra: Accessing Data and Methods with {include:}',
			introParagraph: "So you've been using ActiveRecord/Sinatra for your backend and have come up with a clever method to filter your database and achieve world peace. Or maybe you just created a Class method to calculate the average rating of a particular location in your app, like me. Good for you!!! But now what? How can you access that brilliant/less brilliant but useful information?",
			image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ygxk-YDm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ze5dpaw4mfdi6yq0idei.jpg'
		},
		{
			date: 'December 11, 2021',
			title: 'React Quiz with Unlimited Questions',
			introParagraph: "Wouldn't it be awesome if you could create a quiz app that wouldn't require you to write hundreds of questions along with a correct response and multiple incorrect responses? Though this is by no means the only way to make this happen, here is an solution to make it work.",
			image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--SysjFgFD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lz0jr28waiotnbjr9ppl.jpg'
		},
		{
			date: 'November 8, 2021',
			title: 'DOM Selectors in JavaScript',
			introParagraph: "While creating interactive content with JavaScript, you will often find yourself needing to access various HTML elements in order to make changes to them. We'll go through some of the main ways you can grab elements in the DOM, and how you can make use of what they hold.",
			image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--PmanaoTN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/scsjs83rmtwbrznzizgi.jpg'
		},
	]
	
	return (
		<div ref={blogRef} className='comp-blogs'>
			<h1>BLOG POSTS</h1>
			{blogPosts.map (post => (
				<BlogPost 
					key={post.title}
					post={post}
				/>
			))}
		</div>
	);
}

export default Blog;