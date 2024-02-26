import { useState } from "react";
import HapticTest from "./components/HapticTest";
import WelcomePage from "./components/WelcomePage";
import PreQuest from "./components/PreQuest";
import HapticTestFailed from "./components/HapticTestFailed";
import BreathingExercise from "./components/BreathingExercise";

function App() {

  const [state, setState] = useState(<WelcomePage handleClick={handleClick}/>)
  
  function handleClick(){
    setState(<HapticTest handleYes={handleYes} handleNo={handleNo}/>)
  }
  function handleYes(){
    setState(<PreQuest handleClick={sendToBE}/>)
  }
  function handleNo(){
    setState(<HapticTestFailed/>)
  }
  function sendToBE(){
    setState(<BreathingExercise/>)
  }
  // const handleForm = (e) => {
  //   if( e === "3")
  //   setState(<PreQuest/>)
  // }

  return (
    <div>
      {state}
      
    </div>
  );
}

export default App;
