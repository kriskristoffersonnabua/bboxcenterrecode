import React, { useState } from 'react'
import { authorizeUser } from '../../controllers/firebaseController'

const LoginPage = props => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const authorize = () => authorizeUser(username, password)
	const setUser = evt => setUsername(evt.currentTarget.value)
	const setPass = evt => setPassword(evt.currentTarget.value)

	return (
		<div
			className="container-fluid is-flex"
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}>
			<div className="box" style={{ width: 400 }}>
				<div className="block">
					<img
						className="image"
						alt="brainbox-logo"
						src={require('../../assets/logo_full.png')}
					/>
				</div>
				<label className="label">Email</label>
				<input
					className="input is-small"
					style={{ marginBottom: 10 }}
					onChange={setUser}
				/>
				<div className="block">
					<label className="label">Password</label>
					<input
						className="input is-small"
						onChange={setPass}
						type="password"
					/>
				</div>
				<button className="button is-success is-small" onClick={authorize}>
					Login
				</button>
			</div>
		</div>
	)
}

export default LoginPage
