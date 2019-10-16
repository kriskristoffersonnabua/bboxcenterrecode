import React from 'react'
import './App.css'
import '../node_modules/bulma/css/bulma.min.css'
import Header from './components/Header'
import EmployeeAddForm from './components/EmployeeAddForm'

function App() {
	return (
		<div class="container-fluid has-background-light">
			<Header />
			<EmployeeAddForm />
		</div>
	)
}

export default App
