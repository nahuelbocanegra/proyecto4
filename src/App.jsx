import { useState ,useEffect} from 'react'
import './App.css'
import Card from "./component/Card"
import Loader from './component/Loader'

function App(){
  const [estado,setEstado]=useState(true)
 setTimeout(()=>{
    console.log("hola")
    setEstado(false)
 },1000)
  
  return(
      <>       
              {estado? <Loader></Loader> : <Card></Card>}
         
      </>
  )
}

export default App;
