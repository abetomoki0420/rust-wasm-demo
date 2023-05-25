import { useState, useEffect } from 'react'
import init, { add } from "../../pkg/my_wasm_project"

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  useEffect( () => {
    const loadWasm = async () => {
      try {
        await init();
      }catch(e){
        alert("load wasm error occurs")
      }
    }
    loadWasm()
  }, [])

  const onClick = () => {
    alert(add(num1, num2))
  }

  return (
    <div>
      <h1>Wasm Demo</h1>
      <input type="number" value={num1} onChange={e => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={e => setNum2(Number(e.target.value))} />
      <button onClick={ () => onClick()}>Calc</button>
    </div>
  )
}

export default App
