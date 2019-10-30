import React, { useState, useEffect, useContext } from 'react'
import EmployeeDashboardContext from '../../controllers/contexts/EmployeeDashboardContext'
import { WEEKDAYS } from '../../utils/dateutils'
import { convertStringTimeToMilliseconds } from '../../utils/helpers'
import { withRouter } from 'react-router-dom'
import { addDocument } from '../../controllers/firebaseController'

const Schedule = props => {
	const { weekday, timeStart, timeEnd } = props.schedule
	return (
		<span
			onClick={props.deleteSchedule}
			data-idx={props.index}
			className="button is-info is-small"
			style={{ marginRight: 2, marginBottom: 2 }}>
			{`${WEEKDAYS[weekday]} ${
				new Date(timeStart).toTimeString().split(' ')[0]
			}-${new Date(timeEnd).toTimeString().split(' ')[0]}`}
			<span style={{ marginLeft: 10 }}>
				<i className="fas fa-trash" />
			</span>
		</span>
	)
}

const EmployeeView = props => {
	const [employee, setEmployee] = useState({
		isMale: true,
		committeeMembership: 'Tutor'
	})
	const [toAddNewSchedule, setNewSchedule] = useState({ weekday: 0 })
	const { fetchEmployees } = useContext(EmployeeDashboardContext)

	const backToEmployeeDashboard = () => {
		props.history.push(`/dashboard/employees`, { modal: false })
	}

	const onFieldChange = evt => {
		const {
			currentTarget: {
				dataset: { field },
				value
			}
		} = evt
		if (value.includes('false') || value.includes('true')) {
			setEmployee(prevState => ({
				...prevState,
				[field]: !/^(false|0)$/i.test(value) && !!value
			}))
		} else if (value.includes('-')) {
			setEmployee(prevState => ({ ...prevState, [field]: new Date(value) }))
		} else {
			setEmployee(prevState => ({ ...prevState, [field]: value }))
		}
	}

	const onTimeChange = evt => {
		const {
			currentTarget: {
				dataset: { field },
				value
			}
		} = evt
		setNewSchedule(prevState => ({
			...prevState,
			[field]: convertStringTimeToMilliseconds(value)
		}))
	}

	const onWeekdayChange = evt => {
		const {
			currentTarget: { value }
		} = evt
		setNewSchedule(prevState => ({
			...prevState,
			weekday: Number.parseInt(value)
		}))
	}

	const addSchedule = () => {
		if (!!toAddNewSchedule.timeStart && !!toAddNewSchedule.timeEnd) {
			let newSchedule = employee.availableSchedule || []
			newSchedule.push(toAddNewSchedule)

			setEmployee(prevState => ({
				...prevState,
				availableSchedule: newSchedule
			}))
		}
	}

	const removeSchedule = evt => {
		const {
			currentTarget: {
				dataset: { idx }
			}
		} = evt
		let newSchedule = employee.availableSchedule
		newSchedule.splice(idx, 1)
		setEmployee(prevState => ({
			...prevState,
			availableSchedule: newSchedule
		}))
	}

	const saveEmployee = () => {
		//TODO: form validation
		addDocument('userprofile', employee, null)
		fetchEmployees()
		backToEmployeeDashboard()
	}

	return (
		<div
			className="container-fluid is-flex"
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				background: 'rgba(0,0,0,0.8)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
				height: '100vh',
				overflowY: 'auto',
				zIndex: 100
			}}>
			<div
				className="container"
				style={{
					width: '100%',
					height: '100%',
					paddingTop: 20,
					paddingBottom: 20,
					overflowY: 'auto'
				}}>
				<div className="nav-bar">
					<div className="nav-bar-left is-flex" style={{ marginBottom: 10 }}>
						<button
							onClick={saveEmployee}
							className="button level-left is-success is-small"
							style={{ marginRight: 10 }}>
							Add Employee
						</button>
						<button
							onClick={backToEmployeeDashboard}
							className="button level-right is-danger is-small">
							Cancel
						</button>
					</div>
				</div>
				<div className="columns">
					<div className="column is-one-third">
						<div className="box ">
							<label className="label is-size-6">Personal Information</label>
							<label className="label is-size-7">Firstname</label>
							<input
								data-field="firstname"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Firstname"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Middlename
							</label>
							<input
								data-field="middlename"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Middlename"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Lastname
							</label>
							<input
								data-field="lastname"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Lastname"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Citizenship
							</label>
							<input
								data-field="citizenship"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Citizenship"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Place of Birth
							</label>
							<input
								data-field="birthPlace"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Place of Birth"
							/>
							<div className="level">
								<div className="level-left">
									<div className="container">
										<label
											style={{ marginTop: 10 }}
											className="label is-size-7">
											Birthday
										</label>
										<input
											data-field="birthday"
											onChange={onFieldChange}
											className="input is-small"
											type="date"
											placeholder="Birthday"
										/>
									</div>
								</div>
								<div className="level-right">
									<div className="container">
										<label
											style={{ marginTop: 10 }}
											className="label is-size-7">
											Gender
										</label>
										<div className="select is-small">
											<select data-field="isMale" onChange={onFieldChange}>
												<option value={true}>Male</option>
												<option value={false}>Female</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Permanent Address
							</label>
							<input
								data-field="permanentAddress"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Permanent Address"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Present Address
							</label>
							<input
								data-field="presentAddress"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Present Address"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Contact
							</label>
							<input
								data-field="mobileContact"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Contact"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Committee Membership
							</label>
							<div className="select is-small">
								<select
									data-field="committeeMembership"
									onChange={onFieldChange}>
									<option value="Operation">Operation</option>
									<option value="Client">Client</option>
									<option value="Tutor">Tutor</option>
									<option value="Marketing">Marketing</option>
									<option value="Scholarshipc">Scholarship</option>
									<option value="Human Resource">Human Resource</option>
									<option value="Finance">Finance</option>
								</select>
							</div>
						</div>
					</div>
					<div className="column is-one-third">
						<div className="box">
							<label className="label is-size-6">Education</label>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Primary Education
							</label>
							<input
								data-field="primaryEducation"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Primary Education"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Secondary Education
							</label>
							<input
								data-field="secondaryEducation"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Secondary Education"
							/>
						</div>
						<div className="box">
							<label className="label is-size-6">Emergency Contact</label>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Name
							</label>
							<input
								data-field="emergencyPerson"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Contact Person"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Contact
							</label>
							<input
								data-field="emergencyContactPerson"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Contact Number"
							/>
						</div>
					</div>
					<div className="column is-one-quarter">
						<div className="box">
							<label className="label is-size-6">Available Schedule</label>
							<div className="container">
								<label style={{ marginTop: 10 }} className="label is-size-7">
									Weekday
								</label>
								<div className="select is-small">
									<select data-field="weekday" onChange={onWeekdayChange}>
										<option value={0}>Sunday</option>
										<option value={1}>Monday</option>
										<option value={2}>Tuesday</option>
										<option value={3}>Wednesday</option>
										<option value={4}>Thursday</option>
										<option value={5}>Friday</option>
										<option value={6}>Saturday</option>
									</select>
								</div>
								<label style={{ marginTop: 10 }} className="label is-size-7">
									Time Start
								</label>
								<input
									data-field="timeStart"
									onChange={onTimeChange}
									className="input is-small"
									type="time"
								/>
								<label style={{ marginTop: 10 }} className="label is-size-7">
									Time End
								</label>
								<input
									data-field="timeEnd"
									onChange={onTimeChange}
									className="input is-small"
									type="time"
								/>
								<div className="container is-flex" style={{ marginBottom: 10 }}>
									<button
										style={{ marginTop: 10 }}
										onClick={addSchedule}
										className="button is-success is-small">
										Add
									</button>
								</div>
							</div>
							<div className="container" style={{ overflowY: 'scroll' }}>
								{!!employee.availableSchedule &&
									typeof employee.availableSchedule === 'object' &&
									employee.availableSchedule.map((sched, idx) => {
										return (
											<Schedule
												index={idx}
												schedule={sched}
												deleteSchedule={removeSchedule}
											/>
										)
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(EmployeeView)
