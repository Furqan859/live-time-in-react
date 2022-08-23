import { useEffect, useState } from "react";

function App() {
  const [hours , setHours] = useState();
  
  useEffect(()=>{
    setInterval(()=>{
      const date = new Date();
      setHours(date.toLocaleTimeString());
    },1000);
  },[]);
  
 
  return (
    
    <h1>{hours}</h1>
    
  );
}

export default App;
