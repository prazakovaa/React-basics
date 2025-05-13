import View from './components/PercentView'
import { useState } from 'react'
import "./App.css"
 
const App = () => {
  const [rangeValue, setRangeValue] = useState(100);
  const initial: number = 50;
 
  return (
    <>
    <div>
      <input type="range" min={0} max={200} onChange={(e) => {setRangeValue(parseInt(e.target.value))}} defaultValue={initial}/>
    </div>
    {console.log(rangeValue)}
      <View value={rangeValue} max={100} makeColor={(p) => `hsl(${p*100},100%,50%)`}/>
    </>
  )
}
 
export default App

/*
<ViewBox value={50} max={100} makeColor={(p) => `hsl(${p*100},100%,50%)`}/>
<ViewBox value={25} max={100} makeColor={(p) => `hsl(${p*100},100%,50%)`}/>
*/