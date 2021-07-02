import { Component } from "react"

export const withData = (CmpWrapped, url, Loader) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        cargando: true,
        datos: null
      }
    }

    componentDidMount() {
      fetch(url)
        .then(resp => resp.json())
        .then(datos => {
          setTimeout(() => {
            this.setState({
              cargando: false,
              datos
            })
          }, 1000)
        })
    }

    render() {
      return (
        <>
          {this.state.cargando ? <Loader /> : <CmpWrapped datos={this.state.datos} />}
        </>
      )
    }
  }
}