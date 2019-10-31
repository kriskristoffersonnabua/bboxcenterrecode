import React from 'react'
import Header from '../Header'
import EmployeeDashboard from '../EmployeeDashboard'
import LearnersDashboard from '../LearnersDashboard'
import EmployeeAddForm from '../EmployeeAddForm'
import { Switch, Route } from 'react-router-dom'

function Dashboard(props) {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route path="/dashboard/employees" component={EmployeeDashboard} />
				<Route path="/dashboard/learners" component={LearnersDashboard} />
			</Switch>
		</div>
	)
}

export default Dashboard
