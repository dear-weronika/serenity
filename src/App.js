import { createContext, useEffect, useMemo, useState } from "react";
import HapticTest from "./components/HapticTest";
import WelcomePage from "./components/WelcomePage";
import Questionnaire from "./components/Questionnaire";
import HapticTestFailed from "./components/HapticTestFailed";
import BreathingExercise from "./components/exercise/BreathingExercise";
import './style.css';
import { Container } from "@mui/material";
import PostQuest from "./components/PostQuest";
import Survey from "./components/Survey";

export const AnimationContext = createContext({
  animationStart: "",
  setAnimationStart: () => { }
})
function App() {

  const [state, setState] = useState(<WelcomePage handleClick={handleClick} />)
  const [animationStart, setAnimationStart] = useState(false)
  const [exercise, setExercise] = useState()
  const [questionnaire, setQuestionnare] = useState(true)

  const value = useMemo(
    () => ({ animationStart, setAnimationStart }),
    [animationStart]
  )

  function handleClick() {
    setState(<HapticTest handleYes={handleYes} handleNo={handleNo} />)
    // setState(<BreathingExercise />)
  }
  function handleYes() {
    setState(<Questionnaire version={1} handleClick={firstExercise} />)
  }
  function handleNo() {
    setState(<HapticTestFailed />)
  }
  function firstExercise() {
    const randomExercise = Math.random() < 0.5
    setExercise(randomExercise)
    setState(<BreathingExercise version={randomExercise} />)
  }

  function secondExercise() {
    setState(<BreathingExercise version={!exercise} />)
  }
  function openSurvey() {
    setState(<Survey />)
  }
  useEffect(() => {
    if (animationStart) {
      setTimeout(() => {
        setState(<Questionnaire version={questionnaire ? 2 : 3} handleClick={questionnaire ? secondExercise : openSurvey} />)
        setAnimationStart(!animationStart)
      }, 12000)
      setQuestionnare(false)
    }
  })

  return (
    <AnimationContext.Provider value={value}>
      {useMemo(() => (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {state}
        </Container>
      ), [state])}
    </AnimationContext.Provider>
  );
}

export default App;
