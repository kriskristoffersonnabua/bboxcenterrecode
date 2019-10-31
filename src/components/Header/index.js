import React from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../controllers/firebaseController'

const Header = props => {
	const redirecTo = evt => {
		const {
			preventDefault,
			currentTarget: {
				dataset: { link }
			}
		} = evt
		props.history.push(`/dashboard/${link}`)
	}

	const logout = () => auth().signOut()

	return (
		<nav className="navbar box is-paddingless ">
			<div className="navbar-brand is-centered image is-128x64">
				<img
					className="navbar-item"
					src={require('../../assets/logo_full.png')}
				/>
			</div>
			<div className="navbar-end">
				<a
					onClick={redirecTo}
					data-link="timelog"
					className={`has-text-weight-bold navbar-item is-size-7 ${
						props.location.pathname.includes('timelog')
							? 'has-text-success'
							: ''
					}`}>
					Time Log
				</a>
				<a
					onClick={redirecTo}
					data-link="employees"
					className={`has-text-weight-bold navbar-item is-size-7 ${
						props.location.pathname.includes('employees')
							? 'has-text-success'
							: ''
					}`}>
					Employees
				</a>
				<a
					onClick={redirecTo}
					data-link="learners"
					className={`has-text-weight-bold navbar-item is-size-7 ${
						props.location.pathname.includes('learners')
							? 'has-text-success'
							: ''
					}`}>
					Learners
				</a>
				<a
					onClick={redirecTo}
					data-link="inventory"
					className={`has-text-weight-bold navbar-item is-size-7 ${
						props.location.pathname.includes('inventory')
							? 'has-text-success'
							: ''
					}`}>
					Inventory
				</a>
				<a
					onClick={redirecTo}
					data-link="payments"
					className={`has-text-weight-bold navbar-item is-size-7 ${
						props.location.pathname.includes('payments')
							? 'has-text-success'
							: ''
					}`}>
					Payments
				</a>
				<a
					href="#"
					onClick={logout}
					data-link="payments"
					className={`has-text-weight-bold navbar-item has-text-danger is-size-7`}>
					Logout
				</a>
			</div>
		</nav>
	)
}

export default withRouter(Header)
