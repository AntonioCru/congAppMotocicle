import React from 'react'

import iconCheck from '../../../images/iconCheck.png'
import './dashboard.css'

export default function Dashboard() {
  return (
    <>
      <header className="headerContainer">
        <div className="containerIconimage">
          <img className="imgIcon" src={iconCheck} alt="iconCheck" />
        </div>
      </header>
      <footer className="containerFooter">
        <h1>Gracias !</h1>
        <p>
          Gracias por registrarse, deseamos que esta app cumpla con sus
          expectativas
        </p>
      </footer>
    </>
  )
}
