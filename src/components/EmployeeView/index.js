import React from 'react'
import { WEEKDAYS } from '../../utils/dateutils'

const Schedule = props => {
	const { weekday, timestart, timeend } = props.schedule
	return (
		<span
			className="button is-info"
			style={{ marginRight: 2, marginBottom: 2 }}>
			{`${WEEKDAYS[weekday]} ${
				new Date(timestart).toTimeString().split(' ')[0]
			} ${new Date(timeend).toTimeString().split(' ')[0]}`}
		</span>
	)
}

const EmployeeView = props => {
	return (
		<div className="container" style={{ paddingBottom: 20 }}>
			<div className="nav-bar">
				<div className="nav-bar-left is-flex" style={{ marginBottom: 10 }}>
					<button
						className="button level-left is-success is-small"
						style={{ marginRight: 10 }}>
						Edit Employee
					</button>
					<button className="button level-right is-danger is-small">
						Cancel
					</button>
				</div>
			</div>
			<div className="columns">
				<div className="column is-one-third">
					<div className="box ">
						<label className="label is-size-5">Personal Information</label>
						<label className="label">Firstname</label>
						<input className="input" placeholder="Firstname" />
						<label className="label">Middlename</label>
						<input className="input" placeholder="Middlename" />
						<label className="label">Lastname</label>
						<input className="input" placeholder="Lastname" />
						<label className="label">Citizenship</label>
						<input className="input" placeholder="Citizenship" />
						<label className="label">Place of Birth</label>
						<input className="input" placeholder="Place of Birth" />
						<div className="level">
							<div className="level-left">
								<div className="container">
									<label className="label">Birthday</label>
									<input className="input" type="date" placeholder="Birthday" />
								</div>
							</div>
							<div className="level-right">
								<div className="container">
									<label className="label">Gender</label>
									<div className="select">
										<select>
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<label className="label">Permanent Address</label>
						<input className="input" placeholder="Permanent Address" />
						<label className="label">Present Address</label>
						<input className="input" placeholder="Present Address" />
						<label className="label">Contact</label>
						<input className="input" placeholder="Contact" />
						<label className="label">Committee Membership</label>
						<div className="select">
							<select>
								<option>Operation</option>
								<option>Client</option>
								<option>Tutor</option>
								<option>Marketing</option>
								<option>Scholarship</option>
								<option>Human Resource</option>
								<option>Finance</option>
							</select>
						</div>
					</div>
				</div>
				<div className="column is-one-third">
					<div className="box">
						<label className="label is-size-5">Education</label>
						<label className="label">Primary Education</label>
						<input className="input" placeholder="Contact" />
						<label className="label">Secondary Education</label>
						<input className="input" placeholder="Contact" />
					</div>
					<div className="box">
						<label className="label is-size-5">Emergency Contact</label>
						<label className="label">Name</label>
						<input className="input" placeholder="Contact" />
						<label className="label">Contact</label>
						<input className="input" placeholder="Contact" />
					</div>
				</div>
				<div className="column is-one-quarter">
					<div className="box">
						<label className="label is-size-5">Available Schedule</label>
						<div className="container">
							<label className="label">Date</label>
							<input className="input" placeholder="Contact" type="date" />
							<label className="label">Time Start</label>
							<input className="input" placeholder="Contact" type="time" />
							<label className="label">Time End</label>
							<input
								className="input"
								placeholder="Contact"
								type="time"
								style={{ marginBottom: 20 }}
							/>
							<div className="container is-flex" style={{ marginBottom: 10 }}>
								<button className="button is-success">Add</button>
							</div>
						</div>
						<div className="container" style={{ overflowY: 'scroll' }}>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
							<Schedule
								schedule={{
									weekday: 0,
									timestart: 1571197201149,
									timeend: 1571197201149
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EmployeeView
