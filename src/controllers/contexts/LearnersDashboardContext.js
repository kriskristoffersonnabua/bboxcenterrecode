import React, { useState, useEffect, createContext } from 'react'
import { getCollection } from '../firebaseController'

const LearnersDashboardContext = createContext()

function Provider(props) {
	const [learners, setLearners] = useState([])

	const fetchLearners = () => {
		getCollection('learnersProfile').then(data => {
			setLearners(prevState => data)
		})
	}

	//get all learners on first load
	useEffect(() => {
		fetchLearners()
	}, [])

	const fns = {
		fetchLearners
	}

	return (
		<LearnersDashboardContext.Provider value={{ learners, ...fns }}>
			{props.children}
		</LearnersDashboardContext.Provider>
	)
}

export {
	LearnersDashboardContext as default,
	Provider as LearnersDashboardProvider
}
