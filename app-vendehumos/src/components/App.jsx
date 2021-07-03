import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from './Header'
import ListaVendehumos from './ListaVendehumos'
import Formulario from './Formulario'
import DetalleVendehumos from './DetalleVendehumos'
import Error from './Error'
import { inicializarDatos } from '../store/vendehumos/actions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(inicializarDatos())
  }, [])

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/vendehumos" exact component={ListaVendehumos} />
          <Route path="/vendehumos/:id" component={DetalleVendehumos} />
          <Route path="/crear-vendehumos" component={Formulario} />
          <Redirect exact from="/" to="/vendehumos" />
          <Route path="*" component={Error} />
        </Switch>
      </main>
    </div>
  )
}

export default App
