import React from 'react'
import { ApplicationProvider } from './contexts/ApplicationContext'
import { EmployeeDashboardProvider } from './contexts/EmployeeDashboardContext'

function MainProvider(props) {
	return (
		<ApplicationProvider>
			<EmployeeDashboardProvider>{props.children}</EmployeeDashboardProvider>
		</ApplicationProvider>
	)
}

export default MainProvider
