import React from 'react';

function BlogPost({post}) {
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.introParagraph}</p>
		</div>
	);
}

export default BlogPost;