import Sugus from './Sugus'
import Estado from './Estado'

const PropsYState = () => {
  return (
    <>
      <h1>Propiedades y Estado</h1>
      <Sugus />
      <Sugus color="yellow" sabor="limón" />
      <Sugus color="blue" sabor="piña" />
      <Sugus color="orange" sabor="naranja" />

      <Estado />
    </>
  )
}

export default PropsYState
