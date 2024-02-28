import { useContext, useState } from "react"
import StartExercise from "./StartExercise"
import Exercise from "./Exercise"
import { AnimationContext } from "../../App"



export default function BreathingExercise(params) {

    const [state, setState] = useState(false)
    const {animationStart,setAnimationStart} = useContext(AnimationContext)
    const handleClick = () => {
        setAnimationStart(!animationStart)
    }

    return (

        <div>
            {!animationStart
                ? <StartExercise handleClick={handleClick} />
                : <Exercise />}
        </div>
    )
};
