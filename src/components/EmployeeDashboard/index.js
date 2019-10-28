import React, { useContext, useState } from 'react'
import Table from '../reusables/Table'
import EmployeeDashboardContext from '../../controllers/contexts/EmployeeDashboardContext'
import { withRouter } from 'react-router-dom'

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
					paddingLeft: 75,
					paddingRight: 75,
					marginBottom: 10
				}}>
				<button onClick={openEmployeeInformation} className="button is-primary">
					<span className="icon" style={{ marginRight: 10 }}>
						<i className="fas fa-users"></i>
					</span>
					View Employee
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
		</div>
	)
}

export default withRouter(EmployeeDashboard)
