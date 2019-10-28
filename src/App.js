import React from 'react'
import './App.css'
import '../node_modules/bulma/css/bulma.min.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainProvider from './controllers/MainProvider'
import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyDoUi4EDTxdT4Hv-oHkj_RKx90xlMjrSNw',
	authDomain: 'brainbox-system.firebaseapp.com',
	databaseURL: 'https://brainbox-system.firebaseio.com',
	projectId: 'brainbox-system',
	storageBucket: 'brainbox-system.appspot.com',
	messagingSenderId: '623540238415',
	appId: '1:623540238415:web:9a01264466b326e8'
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

function App() {
	return (
		<div className="has-background-light" style={{ height: '100vh' }}>
			<Router>
				<MainProvider>
					<Switch>
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/login" component={Login} />
					</Switch>
				</MainProvider>
			</Router>
		</div>
	)
}

export default App
