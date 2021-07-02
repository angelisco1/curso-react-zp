// import React from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import ListaVendehumos from './ListaVendehumos'
import Formulario from './Formulario'
import DetalleVendehumos from './DetalleVendehumos'
import Error from './Error'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/vendehumos">Inicio</Link>
        </li>
        <li>
          <Link to="/crear-vendehumos">+ Vendehumos</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/vendehumos" exact component={ListaVendehumos} />
        <Route path="/vendehumos/:id" component={DetalleVendehumos} />
        <Route path="/crear-vendehumos" component={Formulario} />
        <Redirect exact from="/" to="/vendehumos" />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  )
}

export default App
