import { useState ,useEffect} from 'react'
import './App.css'
import Card from "./component/Card"
import Loader from './component/Loader'

function App(){
  const [estado,setEstado]=useState(true)
  setTimeout(()=>{
    setEstado(false)
  },1000)
  
  return(
      <>       
        <Loader></Loader>  
      </>
  )
}

export default App;
