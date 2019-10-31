import React, { useContext, useState } from 'react'
import Table from '../reusables/Table'
import LearnersDashboardContext from '../../controllers/contexts/LearnersDashboardContext'
import EmployeeView from '../EmployeeView'
import EmployeeAddForm from '../EmployeeAddForm'
import LearnerAddForm from '../LearnerAddForm'
import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

function LearnersDashboard(props) {
	const { history } = props
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const { learners } = useContext(LearnersDashboardContext)

	const learnerslist = learners.map(learner => [
		learner.lastname,
		learner.firstname,
		learner.middlename,
		learner.gender,
		learner.guardianContact
	])

	const openLearnerInformation = () => {
		if (!!selectedIndex && selectedIndex >= 0)
			history.push(`/dashboard/learners/${learners[selectedIndex].key}`, {
				modal: true
			})
	}

	const openAddLearnerForm = () => {
		history.push(`/dashboard/learners/add`, {
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
						onClick={openLearnerInformation}
						className="button is-primary is-small">
						<span className="icon" style={{ marginRight: 10 }}>
							<i className="fas fa-users"></i>
						</span>
						View Learner Profile
					</button>
				)}
				<button
					style={{ marginRight: 10 }}
					onClick={openAddLearnerForm}
					className="button is-success is-small">
					<span className="icon" style={{ marginRight: 10 }}>
						<i className="fas fa-user-plus"></i>
					</span>
					Add Learner
				</button>
				<button
					disabled
					style={{ marginRight: 10 }}
					onClick={openAddLearnerForm}
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
					'Gender',
					'Guardian Contact'
				]}
				indexSelectCallback={tableCallback}
				data={learnerslist}
			/>
			<Switch>
				<Route
					exact
					path={`/dashboard/learners/add`}
					component={LearnerAddForm}
				/>
				<Route
					exact
					path={`/dashboard/learners/:userprofileKey`}
					component={() => <div></div>}
				/>
			</Switch>
		</div>
	)
}

export default withRouter(LearnersDashboard)
