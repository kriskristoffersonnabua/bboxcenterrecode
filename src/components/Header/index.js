import React from 'react'

const Header = props => {
	return (
		<nav class="navbar box is-paddingless ">
			<div class="navbar-brand is-centered image is-128x64">
				<img class="navbar-item" src={require('../../assets/logo_full.png')} />
			</div>
			<div class="navbar-end">
				<a class="navbar-item">Time Log</a>
				<a class="navbar-item">Employees</a>
				<a class="navbar-item">Reviewers</a>
				<a class="navbar-item">Inventory</a>
				<a class="navbar-item">Payments</a>
			</div>
		</nav>
	)
}

export default Header
