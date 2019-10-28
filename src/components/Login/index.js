import React from 'react'

const LoginPage = props => {
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
				<input className="input is-small" style={{ marginBottom: 10 }} />
				<div className="block">
					<label className="label">Password</label>
					<input className="input is-small" />
				</div>
				<button className="button is-success is-small">Login</button>
			</div>
		</div>
	)
}

export default LoginPage
