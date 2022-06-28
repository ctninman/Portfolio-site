import React from 'react';
import {blogPosts} from './variables.js'
import BlogPost from './BlogPost'

function Blog(props) {
	return (
		<div style={{backgroundColor: 'green'}}>
			<h1>All My Blog Posts</h1>
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