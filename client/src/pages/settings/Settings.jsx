import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update your account</span>
					<span className="settingsDeleteTitle">Delete account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://media-exp1.licdn.com/dms/image/C4D03AQEUs9Vf3a_Jbg/profile-displayphoto-shrink_800_800/0/1553760743552?e=1651708800&v=beta&t=7NUKOcOFhaxjNxNUrI_IKxdCh6MtAAqoMTeFk4DvNJc"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon fa-regular fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: 'none' }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Tom" />
					<label>Email</label>
					<input type="email" placeholder="tom@gmail.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
