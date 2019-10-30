import React, { useState, useEffect, createContext } from 'react'
import { getCollection } from '../firebaseController'

const EmployeeDashboardContext = createContext()

function Provider(props) {
	const [employees, setEmployees] = useState([])

	const fetchEmployees = () => {
		getCollection('userprofile').then(data => {
			setEmployees(prevState => data)
		})
	}

	//get all employees on first load
	useEffect(() => {
		fetchEmployees()
	}, [])

	const fns = {
		fetchEmployees
	}

	return (
		<EmployeeDashboardContext.Provider value={{ employees, ...fns }}>
			{props.children}
		</EmployeeDashboardContext.Provider>
	)
}

export {
	EmployeeDashboardContext as default,
	Provider as EmployeeDashboardProvider
}
