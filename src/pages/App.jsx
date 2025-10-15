import React from 'react'
import { Router } from '@reach/router'
import Dashboard from '../components/pageSections/Dashboard/Dashboard'
import RecoveryPassword from './RecoveryPassword'
import TermConditions from './TermConditions'
import SuccessfulPayment from './SuccessfulPayment'
import PrivacyNotice from './PrivacyNotice'

export default function App() {
	return (
		<Router>
			<Dashboard path='/' />
			<RecoveryPassword path='/RecoveryPassword' />
			<TermConditions path='/TermConditions' />
			<PrivacyNotice path='/PrivacyNotice' />
			<SuccessfulPayment path='/SuccessfulPayment' />
		</Router>
	)
}
