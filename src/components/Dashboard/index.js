import React from 'react'
import Header from '../Header'
import EmployeeDashboard from '../EmployeeDashboard'
import EmployeeAddForm from '../EmployeeAddForm'
import { Switch, Route } from 'react-router-dom'

function Dashboard(props) {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route path="/dashboard/employees" component={EmployeeDashboard} />
			</Switch>
		</div>
	)
}

export default Dashboard
