import { createContext, useEffect, useMemo, useState } from "react";
import HapticTest from "./components/HapticTest";
import WelcomePage from "./components/WelcomePage";
import Questionnaire from "./components/Questionnaire";
import HapticTestFailed from "./components/HapticTestFailed";
import BreathingExercise from "./components/exercise/BreathingExercise";
import './style.css';
import { Container } from "@mui/material";
import Survey from "./components/Survey";
import FinalPage from "./components/FinalPage";
import Complete from "./components/Complete";

export const AnimationContext = createContext({
  animationStart: "",
  setAnimationStart: () => { }
})
function App() {

// state of visible page
  const [state, setState] = useState(<WelcomePage handleClick={handleClick} />)

  // state of animation - if started 
  const [animationStart, setAnimationStart] = useState(false)

  // state of haptic of bubble
  const [exercise, setExercise] = useState()

  // state if there will be another questionnaire later
  const [questionnaire, setQuestionnare] = useState(true)

  // state of data with all questionnaires and survey
  const [form , setForm] = useState([])

  const value = useMemo(
    () => ({ animationStart, setAnimationStart }),
    [animationStart]
  )

  function handleClick() {
    setState(<HapticTest handleYes={handleYes} handleNo={handleNo} />)
    // setState(<BreathingExercise />)
  }
  function handleYes() {
    setState(<Questionnaire version={1} handleClick={firstExercise} handleSendData={handleSendData}/>)
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
    setState(<Survey handleClick = {openFinalPage} handleSendData={handleSendData}/>)
  }
  function openFinalPage(){
    // setState(<FinalPage data={form}/>)
  }
  function openComplete(){
    setState(<Complete/>)
  }
  function handleSendData(data){
    setForm(form =>[...form,data])
  }
  useEffect(() => {
    if (animationStart) {
      setTimeout(() => {
        setState(<Questionnaire version={questionnaire ? 2 : 3} handleClick={questionnaire ? secondExercise : openSurvey} handleSendData={handleSendData}/>)
        setAnimationStart(!animationStart)
        setQuestionnare(false)
      }, 60000)
    }
  })
  useEffect(() => {
    console.log(form)
    if (form.length===4)
    setState(<FinalPage handleClick={openComplete} data={form}/>)
  },[form])
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
