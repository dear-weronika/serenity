import { useState } from "react"
import StartExercise from "./StartExercise"
import Exercise from "./Exercise"



export default function BreathingExercise(params) {

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(!state)
    }

    return (

        <div>
            {!state
                ? <StartExercise handleClick={handleClick} />
                : <Exercise />}
        </div>
    )
};
