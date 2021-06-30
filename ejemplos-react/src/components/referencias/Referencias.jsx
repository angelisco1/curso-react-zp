import { useRef } from 'react'

const Referencias = () => {

  const audioRef = useRef()

  const play = () => {
    console.log('Play')
    audioRef.current.play()
  }

  const pause = () => {
    console.log('Pause')
    audioRef.current.pause()
  }

  return (
    <div>
      <audio src="/assets/sonido-piolin.m4a" ref={audioRef}></audio>
      {/* <video src="/assets/sonido-piolin.m4a"></video> */}
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
    </div>
  )
}

export default Referencias
