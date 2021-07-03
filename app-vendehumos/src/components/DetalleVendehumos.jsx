import { useState, useEffect } from "react"


const DetalleVendehumos = ({ match }) => {
  const [vendehumos, setVendehumos] = useState(null)
  useEffect(() => {
    fetch(`https://ejemplos-dc1c1.firebaseio.com/vendehumos/angel/${match.params.id}.json`)
      .then(resp => resp.json())
      .then(datos => {
        setVendehumos(datos)
      })
  }, [])

  return (
    <>
      {vendehumos ? (<div>
        <h2>{vendehumos.nombre} (ID: {match.params.id})</h2>
        <p>Tema: {vendehumos.tema}</p>
        <p>Votos: {vendehumos.numVotos}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consequuntur ipsam quis nulla adipisci blanditiis ullam. Pariatur placeat, numquam quo ipsa, at, ea repudiandae consequatur vel eius optio voluptatibus reprehenderit.
        Odio porro rem corrupti enim, officia aut, nihil doloribus nulla nostrum dolore a magnam dicta placeat deleniti corporis commodi quod dolor tenetur facilis laborum quos laudantium provident. Quasi, at quod.
        Ullam, odit harum commodi perferendis cupiditate dolorem vero accusantium cum sit aliquid quod pariatur maxime qui voluptates, rem sequi autem voluptatibus asperiores molestiae aliquam. Modi amet voluptatibus ipsam quisquam veniam?</p>
      </div>) : <p>Cargando datos...</p>}
    </>
  )
}

export default DetalleVendehumos
