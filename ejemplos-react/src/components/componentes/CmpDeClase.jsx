import { Component } from 'react'

class CmpDeClase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      apellidos: ''
    }
  }

  render() {
    return <h2>Esto es un componente de clase</h2>
  }
}