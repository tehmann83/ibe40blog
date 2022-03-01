import './singlePost.css';

const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src="./assets/vienna-sunset-skyline.jpg"
					alt=""
				/>
				<h1 className="singlePostTitle">
					Lorem, ipsum dolor.
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-regular fa-edit"></i>
						<i className="singlePostIcon fa-regular fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>Tom</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
					voluptate, odit magni a, cupiditate nisi nihil libero natus excepturi
					non aliquam. Eveniet fuga nobis ut? Animi accusantium optio itaque
					consequuntur? Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Ea voluptate, odit magni a, cupiditate nisi nihil libero natus
					excepturi non aliquam. Eveniet fuga nobis ut? Animi accusantium optio
					itaque consequuntur? Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Ea voluptate, odit magni a, cupiditate nisi nihil
					libero natus excepturi non aliquam. Eveniet fuga nobis ut? Animi
					accusantium optio itaque consequuntur? Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Ea voluptate, odit magni a, cupiditate
					nisi nihil libero natus excepturi non aliquam. Eveniet fuga nobis ut?
					Animi accusantium optio itaque consequuntur? Lorem ipsum, dolor sit
					amet consectetur adipisicing elit. Ea voluptate, odit magni a,
					cupiditate nisi nihil libero natus excepturi non aliquam. Eveniet fuga
					nobis ut? Animi accusantium optio itaque consequuntur? Lorem ipsum,
					dolor sit amet consectetur adipisicing elit. Ea voluptate, odit magni
					a, cupiditate nisi nihil libero natus excepturi non aliquam. Eveniet
					fuga nobis ut? Animi accusantium optio itaque consequuntur?
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
