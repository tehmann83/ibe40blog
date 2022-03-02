import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const TopBar = () => {
	const { user, dispatch } = useContext(Context);
	const publicFolder = 'http://localhost:5000/images/';

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
	};
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
					<li className="topListItem" onClick={handleLogout}>
						{user && 'LOGOUT'}
					</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link className="link" to="/settings">
						<img
							className="topImg"
							src={publicFolder + user.profilePic}
							alt=""
						/>
					</Link>
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
