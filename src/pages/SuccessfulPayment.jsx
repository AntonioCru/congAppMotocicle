import React from 'react'

import iconCheck from '../images/payment2.png'
import derRes from '../images/DerechosReservados.png'

import '../components/pageSections/SuccessfulPayment/successfulPayment.css'

import { Link } from 'gatsby'

export default function SuccessfulPayment() {
	return (
		<div className='containerDashboard'>
			<header className='headerContainer'>
				<div className='containerIconimage'>
					<img className='imgIcon' src={iconCheck} alt='iconCheck' />
				</div>
			</header>
			<footer className='containerFooter'>
				<div className='containerFooter__description'>
					<h1>Gracias !</h1>
					<p>Deseamos que esta app cumpla sus expectativas</p>
				</div>
			</footer>
			<div className='containerTermConditions'>
				<img className='imgC' src={derRes} alt='iconCheck' />
				<Link to='/TermConditions'>Terminos y Condiciónes</Link>
			</div>
		</div>
	)
}
