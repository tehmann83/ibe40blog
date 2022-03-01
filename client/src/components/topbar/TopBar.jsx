import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

const TopBar = () => {
	const user = false;

	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-twitter"></i>
				<i className="topIcon fa-brands fa-linkedin-in"></i>
				<i className="topIcon fa-brands fa-instagram"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to="/" className="link">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/" className="link">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/" className="link">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/write" className="link">
							WRITE
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/" className="link">
							{user && 'LOGOUT'}
						</Link>
					</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						className="topImg"
						src="https://media-exp1.licdn.com/dms/image/C4D03AQEUs9Vf3a_Jbg/profile-displayphoto-shrink_800_800/0/1553760743552?e=1651708800&v=beta&t=7NUKOcOFhaxjNxNUrI_IKxdCh6MtAAqoMTeFk4DvNJc"
						alt=""
					/>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link to="/login" className="link">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link to="/register" className="link">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
};

export default TopBar;
