import React, {useState} from 'react';

function BlogPost({post}) {

	const [blogHover, setBlogHover] = useState (false)

	function handleMouseEnter () {
		setBlogHover(true)
	}
	
	function handleMouseLeave () {
		setBlogHover(false)
	}

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='blog-post'>
			<div>
				<img style={{width: '150px'}} src={post.image} />
				<h1>{post.title}</h1>
			</div>
			{blogHover ? <p>{post.introParagraph}</p> : null }
		</div>
	);
}

export default BlogPost;