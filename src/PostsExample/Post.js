import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
	const { id } = useParams();
	const [post, setPost] = useState();

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => {
				const post = response.data;
				setPost(post);
			});
	}, [id]);

	return (
		<>
			{post && (
				<>
					<h1>Post №{id}</h1>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</>
			)}
		</>
	);
};
export default Post;
