import './post.css';

const Post = () => {
	return (
		<div className="post">
			<img
				className="postImg"
				src="./assets/vienna-sunset-skyline.jpg"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Life</span>
					<span className="postCat">Career</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
				pariatur dicta dolorem facere, consectetur in aliquam, voluptatem
				eligendi laborum, id impedit quod. Voluptates consequatur dolor velit
				ex, odit placeat tempora? Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Distinctio pariatur dicta dolorem facere, consectetur
				in aliquam, voluptatem eligendi laborum, id impedit quod. Voluptates
				consequatur dolor velit ex, odit placeat tempora? Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Distinctio pariatur dicta dolorem
				facere, consectetur in aliquam, voluptatem eligendi laborum, id impedit
				quod. Voluptates consequatur dolor velit ex, odit placeat tempora?
			</p>
		</div>
	);
};

export default Post;
