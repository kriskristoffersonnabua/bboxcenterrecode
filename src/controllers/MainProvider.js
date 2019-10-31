import React from 'react'
import { ApplicationProvider } from './contexts/ApplicationContext'
import { EmployeeDashboardProvider } from './contexts/EmployeeDashboardContext'
import { LearnersDashboardProvider } from './contexts/LearnersDashboardContext'

function MainProvider(props) {
	return (
		<ApplicationProvider>
			<LearnersDashboardProvider>
				<EmployeeDashboardProvider>{props.children}</EmployeeDashboardProvider>
			</LearnersDashboardProvider>
		</ApplicationProvider>
	)
}

export default MainProvider
