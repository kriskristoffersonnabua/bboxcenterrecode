import React, { useState, useEffect, useContext } from 'react'
import { WEEKDAYS } from '../../utils/dateutils'
import { convertStringTimeToMilliseconds } from '../../utils/helpers'
import { withRouter } from 'react-router-dom'
import { addDocument } from '../../controllers/firebaseController'

const LearnerAddForm = props => {
	const [learner, setLearner] = useState({
		isMale: true,
		learnerType: 'Student'
	})
	const [toAddNewSchedule, setNewSchedule] = useState({ weekday: 0 })
	//TODO: fetch all learners method

	const backToLearnersDashboard = () => {
		props.history.push(`/dashboard/learners`, { modal: false })
	}

	const onFieldChange = evt => {
		const {
			currentTarget: {
				dataset: { field },
				value
			}
		} = evt
		if (value.includes('false') || value.includes('true')) {
			setLearner(prevState => ({
				...prevState,
				[field]: !/^(false|0)$/i.test(value) && !!value
			}))
		} else if (value.includes('-')) {
			setLearner(prevState => ({ ...prevState, [field]: new Date(value) }))
		} else {
			setLearner(prevState => ({ ...prevState, [field]: value }))
		}
	}

	const saveLearner = () => {
		//TODO: form validation
		addDocument('learnerProfile', learner, null)
		//TODO: fetch all learners
		backToLearnersDashboard()
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
					paddingBottom: 20
				}}>
				<div className="nav-bar">
					<div className="nav-bar-left is-flex" style={{ marginBottom: 10 }}>
						<button
							onClick={saveLearner}
							className="button level-left is-success is-small"
							style={{ marginRight: 10 }}>
							Add Learner
						</button>
						<button
							onClick={backToLearnersDashboard}
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
								Mother's Name
							</label>
							<input
								data-field="motherName"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Place of Birth"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Father's Name
							</label>
							<input
								data-field="fatherName"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Place of Birth"
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
								Learner Type
							</label>
							<div className="select is-small">
								<select data-field="learnerType" onChange={onFieldChange}>
									<option value="Student">Student</option>
									<option value="Reviewer">Reviewer</option>
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
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Tertiary Education
							</label>
							<input
								data-field="tertiaryEducation"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Tertiary Education"
							/>
						</div>
						<div className="box">
							<label className="label is-size-6">Guardian</label>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Name
							</label>
							<input
								data-field="guardianName"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Name"
							/>
							<label style={{ marginTop: 10 }} className="label is-size-7">
								Contact
							</label>
							<input
								data-field="guardianContact"
								onChange={onFieldChange}
								className="input is-small"
								placeholder="Contact"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(LearnerAddForm)
