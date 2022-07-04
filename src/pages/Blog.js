import React from 'react';
import {blogPosts} from './variables.js'
import BlogPost from './BlogPost'

function Blog(props) {
	return (
		<div className='comp-blogs'>
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