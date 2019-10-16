import React from 'react'
import { WEEKDAYS } from '../../utils/dateutils'

const Schedule = props => {
	const { weekday, timestart, timeend } = props.schedule
	return (
		<div class="button is-info" style={{ marginRight: 2, marginBottom: 2 }}>
			{`${WEEKDAYS[weekday]} ${
				new Date(timestart).toTimeString().split(' ')[0]
			} ${new Date(timeend).toTimeString().split(' ')[0]}`}
		</div>
	)
}

const EmployeeAddForm = props => {
	return (
		<div class="container" style={{ paddingBottom: 20 }}>
			<div class="columns">
				<div class="column is-one-third">
					<div class="box ">
						<label class="label is-size-5">Personal Information</label>
						<label class="label">Firstname</label>
						<input class="input" placeholder="Firstname" />
						<label class="label">Middlename</label>
						<input class="input" placeholder="Middlename" />
						<label class="label">Lastname</label>
						<input class="input" placeholder="Lastname" />
						<label class="label">Citizenship</label>
						<input class="input" placeholder="Citizenship" />
						<label class="label">Place of Birth</label>
						<input class="input" placeholder="Place of Birth" />
						<div class="level">
							<div class="level-left">
								<div class="container">
									<label class="label">Birthday</label>
									<input class="input" type="date" placeholder="Birthday" />
								</div>
							</div>
							<div class="level-right">
								<div class="container">
									<label class="label">Gender</label>
									<div class="select">
										<select>
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<label class="label">Permanent Address</label>
						<input class="input" placeholder="Permanent Address" />
						<label class="label">Present Address</label>
						<input class="input" placeholder="Present Address" />
						<label class="label">Contact</label>
						<input class="input" placeholder="Contact" />
						<label class="label">Committee Membership</label>
						<div class="select">
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
				<div class="column is-one-third">
					<div class="box">
						<label class="label is-size-5">Education</label>
						<label class="label">Primary Education</label>
						<input class="input" placeholder="Contact" />
						<label class="label">Secondary Education</label>
						<input class="input" placeholder="Contact" />
					</div>
					<div class="box">
						<label class="label is-size-5">Emergency Contact</label>
						<label class="label">Name</label>
						<input class="input" placeholder="Contact" />
						<label class="label">Contact</label>
						<input class="input" placeholder="Contact" />
					</div>
					<div
						class="container"
						style={{ position: 'fixed', bottom: 10, right: 20 }}>
						<div class="level">
							<button
								class="button level-left is-success"
								style={{ marginRight: 10 }}>
								Add Employee
							</button>
							<button class="button level-right is-danger">Cancel</button>
						</div>
					</div>
				</div>
				<div class="column is-one-third">
					<div class="box">
						<label class="label is-size-5">Available Schedule</label>
						<label class="label">Date</label>
						<input class="input" placeholder="Contact" type="date" />
						<label class="label">Time Start</label>
						<input class="input" placeholder="Contact" type="date" />
						<label class="label">Time End</label>
						<input
							class="input"
							placeholder="Contact"
							type="date"
							style={{ marginBottom: 20 }}
						/>
						<div class="container is-flex">
							<button class="button is-success">Add</button>
						</div>
					</div>
					<div class="container" style={{ overflowY: 'scroll' }}>
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
	)
}

export default EmployeeAddForm
