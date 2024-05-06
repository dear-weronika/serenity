import { useContext } from "react"
import StartExercise from "./StartExercise"
import Exercise from "./Exercise"
import { AnimationContext } from "../../App"



export default function BreathingExercise({ version }) {


    const { animationStart, setAnimationStart } = useContext(AnimationContext)
    const handleClick = () => {
        setAnimationStart(!animationStart)
    }

    return (

        <div>

            {!animationStart
                ? <StartExercise handleClick={handleClick} />
                : <Exercise version={version} />}
        </div>
    )
};
