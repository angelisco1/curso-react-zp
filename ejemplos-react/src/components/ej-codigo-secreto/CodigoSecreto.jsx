import { useState, useEffect } from 'react';
const CODIGO_SECRETO = '6712';

const CodigoSecreto = () => {
  const [codigo, setCodigo] = useState('1278')

  const handleClick = (event) => {
    const tecla = event.target.textContent;
    console.log(tecla)
    switch(tecla) {
      case 'CLD':
        setCodigo('');
        break;
      case 'DEL':
        const nuevoCodigo = codigo.slice(0, codigo.length-1)
        setCodigo(nuevoCodigo);
        break;
      default:
        if (codigo.length < 4) {
          const nuevoCodigo = codigo + tecla
          // if (nuevoCodigo.length === 4 && CODIGO_SECRETO === nuevoCodigo) {
          //   setCodigo('CODE OK')
          //   return
          // }
          setCodigo(nuevoCodigo)
        }
        break;
    }
  }

  // useEffect(() => {
  //   if (CODIGO_SECRETO === Codigo) {
  //       setCodigo('CODE OK')
  //     }
  // }, [codigo])

  const listaBotones = new Array(10).fill(null).map((val, i) => <button type="button" key={i}>{i}</button>)

  return (
    <div>
      <div>
        {CODIGO_SECRETO === codigo ? <p>CODE OK</p> : <p>{codigo}</p>}
      </div>
      <div onClick={handleClick}>
        {/* <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">0</button> */}
        {listaBotones}
        <button type="button">DEL</button>
        <button type="button">CLD</button>
      </div>
    </div>
  )
}

export default CodigoSecreto
