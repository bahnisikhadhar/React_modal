import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isVisible,setIsVisible] = useState(false);

  function handleClick(e){
    e.stopPropagation();
    setIsVisible(true);
 }

 function handleBodyClick(){
  setIsVisible(false);
 }

  return (
    <div className="container" onClick={handleBodyClick}>
    <button onClick={handleClick} className="btn">Open Modal</button>
    {(isVisible) ? <Modal setIsVisible={setIsVisible}/> : null }
    </div>
  );
}

export default App;
