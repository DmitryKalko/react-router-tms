import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
			const posts = response.data;
			setPosts(posts);
		});
	}, []);

	if (!posts) {
		return null;
	}

	return (
		<>
			{posts &&
				posts.map((post) => (
					<Link key={post.id} to={`/posts/${post.id}`}>
						<h2>{post.title}</h2>
					</Link>
				))}
		</>
	);
};
export default Posts;
