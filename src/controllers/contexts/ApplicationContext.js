import React, { useState, useEffect, createContext } from 'react'
import { auth } from '../firebaseController'
import { withRouter } from 'react-router-dom'

const ApplicationContext = createContext()

function Provider(props) {
	const { history } = props
	const [mainState, setMainState] = useState({})

	useEffect(() => {
		auth().onAuthStateChanged(user => {
			if (user) {
				setMainState(prevState => ({
					...prevState,
					authorizedUser: user
				}))
				history.push('/dashboard/employees')
			} else {
				setMainState(prevState => ({
					...prevState,
					authorizedUser: null
				}))
				history.push('/login')
			}
		})
	}, [])

	return (
		<ApplicationContext.Provider value={{ ...mainState }}>
			{props.children}
		</ApplicationContext.Provider>
	)
}

const ComposedApplicationProvider = withRouter(Provider)

export {
	ApplicationContext as default,
	ComposedApplicationProvider as ApplicationProvider
}
