import { createContext, useEffect, useMemo, useState } from "react";
import HapticTest from "./components/HapticTest";
import WelcomePage from "./components/WelcomePage";
import PreQuest from "./components/PreQuest";
import HapticTestFailed from "./components/HapticTestFailed";
import BreathingExercise from "./components/exercise/BreathingExercise";
import './style.css';
import { Container } from "@mui/material";
import PostQuest from "./components/PostQuest";

export const AnimationContext = createContext({
  animationStart: "",
  setAnimationStart: () => { }
})

function App() {

  const [state, setState] = useState(<WelcomePage handleClick={handleClick} />)
  const [animationStart, setAnimationStart] = useState(false)

  const value = useMemo(
    () => ({ animationStart, setAnimationStart }),
    [animationStart]
  )

  function handleClick() {
    setState(<HapticTest handleYes={handleYes} handleNo={handleNo} />)
    // setState(<BreathingExercise />)
  }
  function handleYes() {
    setState(<PreQuest handleClick={sendToBE} />)
  }
  function handleNo() {
    setState(<HapticTestFailed />)
  }
  function sendToBE() {
    setState(<BreathingExercise />)
  }

  useEffect(() => {
    if (animationStart)
      setTimeout(() => setState(<PostQuest />), 64000)
  })

  return (
    <AnimationContext.Provider value={value}>
      {useMemo(() => (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {state}
        </Container>
      ),[animationStart])}
    </AnimationContext.Provider>
  );
}

export default App;
