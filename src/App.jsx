import { useState ,useEffect} from 'react'
import './App.css'
import Card from "./component/Card"
import Loader from './component/Loader'

function App(){
  const [estado,setEstado]=useState(false)
  const [ind,setInd]=useState(0)
  const adelante=()=>{
    setEstado(true)
    setTimeout(()=>{
        setEstado(false)
    },1500)
  }
const atras=()=>{ 
        setEstado(true)
        setTimeout(()=>{
            setEstado(false)
           
    },1500)
}   
  
  return(
      <>
          <div>
                <button onClick={()=>{atras()}}>atras</button>
                <button onClick={()=>{adelante()}}>adelante</button>
          </div>
         
              {estado? <Loader></Loader> : <Card></Card>}
         
      </>
  )
}

export default App;
