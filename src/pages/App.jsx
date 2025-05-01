import React from 'react'
import { Router } from '@reach/router'
import Dashboard from '../components/pageSections/Dashboard/Dashboard'
import RecoveryPassword from './RecoveryPassword'
import TermConditions from './TermConditions'

export default function App() {
	return (
		<Router>
			<Dashboard path='/' />
			<RecoveryPassword path='/RecoveryPassword' />
			<TermConditions path='/TermConditions' />
		</Router>
	)
}
