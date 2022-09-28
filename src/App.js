import { useState } from 'react'
import Button from './components/button.component'
import './App.css'

const green = {
  color : 'green',
  class_name : 'App Green'
}
const yellow = {
  color : 'yellow',
  class_name : 'App Yellow'
}
const red = {
  color : 'red',
  class_name : 'App Red'
}

const App = () => {

  const [color, setColor] = useState(green)

  const changeColor = () => {
    if (color.color === green.color) {
      setColor(yellow)
    } else if (color.color === yellow.color) {
      setColor(red)
    } else {
      setColor(green)
    }
  }

  return (
    <div className={color.class_name} >
      <Button onClick={changeColor} />
    </div>
  )
}


export default App