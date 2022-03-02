import Post from '../post/Post';
import './posts.css';

const Posts = ({ posts }) => {
	return (
		<div className="posts">
			{posts.map((p, i) => (
				<Post key={`post_${i}`} post={p} />
			))}
		</div>
	);
};

export default Posts;
