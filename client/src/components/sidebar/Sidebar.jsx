import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('/categories');
			setCats(res.data);
		};

		getCats();
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
					alt=""
				/>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
					sequi!
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarItem">CATEGORIES</span>
				<ul className="sidebarList">
					{cats.map((c, i) => (
						<li className="sidebarListItem" key={`category_${i}`}>
							<Link className="link" to={`/?cat=${c.name}`}>
								{c.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarItem">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-twitter"></i>
					<i className="sidebarIcon fa-brands fa-linkedin-in"></i>
					<i className="sidebarIcon fa-brands fa-instagram"></i>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
