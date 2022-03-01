import './sidebar.css';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img src="./assets/ocean.jpg" alt="" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
					sequi!
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarItem">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Career</li>
					<li className="sidebarListItem">Coding</li>
					<li className="sidebarListItem">Blockchain</li>
					<li className="sidebarListItem">Trading</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">FPL</li>
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
