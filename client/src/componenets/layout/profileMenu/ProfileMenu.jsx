import React from "react";

const ProfileMenu = () => {
	return (
		<div className="nav-item dropdown ">
			<a 
				className="dropdown-toggle text-dark"
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				<i class="fas fa-user-circle"></i>
			</a>

			<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
				<li>
					<a className="dropdown-item" href="#">
						Login
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="/new-post">
						Add Post
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Dashboard
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
