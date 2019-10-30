import React, { useContext, useState } from 'react'
import Table from '../reusables/Table'
import EmployeeDashboardContext from '../../controllers/contexts/EmployeeDashboardContext'
import EmployeeView from '../EmployeeView'
import EmployeeAddForm from '../EmployeeAddForm'
import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

function EmployeeDashboard(props) {
	const { history } = props
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const { employees } = useContext(EmployeeDashboardContext)

	const employeeslist = employees.map(employee => [
		employee.lastname,
		employee.firstname,
		employee.middlename,
		employee.committeeMembership
	])

	const openEmployeeInformation = () => {
		if (!!selectedIndex && selectedIndex >= 0)
			history.push(`/dashboard/employees/${employees[selectedIndex].key}`, {
				modal: true
			})
	}

	const openEmployeeForm = () => {
		history.push(`/dashboard/employees/add`, {
			modal: true
		})
	}

	const tableCallback = index => setSelectedIndex(index)

	return (
		<div className="container-fluid">
			<div
				className="container-fluid is-flex"
				style={{
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center',
					padding: 10,
					paddingLeft: 20,
					paddingRight: 20,
					paddingBottom: 0,
					position: 'relative',
					top: -25
				}}>
				{selectedIndex >= 0 && (
					<button
						style={{ marginRight: 10 }}
						onClick={openEmployeeInformation}
						className="button is-primary is-small">
						<span className="icon" style={{ marginRight: 10 }}>
							<i className="fas fa-users"></i>
						</span>
						View Employee
					</button>
				)}
				<button
					style={{ marginRight: 10 }}
					onClick={openEmployeeForm}
					className="button is-success is-small">
					<span className="icon" style={{ marginRight: 10 }}>
						<i className="fas fa-user-plus"></i>
					</span>
					Add Employee
				</button>
				<button
					disabled
					style={{ marginRight: 10 }}
					onClick={openEmployeeForm}
					className="button is-danger is-small">
					<span className="icon" style={{ marginRight: 10 }}>
						<i className="fas fa-trash"></i>
					</span>
					Delete
				</button>
			</div>
			<Table
				headers={[
					'Lastname',
					'Firstname',
					'Middlename',
					'Committee Membership'
				]}
				indexSelectCallback={tableCallback}
				data={employeeslist}
			/>
			<Switch>
				<Route
					exact
					path={`/dashboard/employees/add`}
					component={EmployeeAddForm}
				/>
				<Route
					exact
					path={`/dashboard/employees/:userprofileKey`}
					component={EmployeeView}
				/>
			</Switch>
		</div>
	)
}

export default withRouter(EmployeeDashboard)
