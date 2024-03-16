import { Box, Container } from "@mui/material"
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"


// const vibrationIntervals = [100, 400, 100, 300, 100, 200, 100, 150, 100, 130, 100, 120, 100, 110, 100, 100, 100, 90, 100, 80, 100, 80, 100, 80, 100, 80, 100, 500, 100]
const vibrationIntervals = [1300, 500, 1000, 500, 700]


export default function Exercise({shouldVibrate }) {

    const [state, setState] = useState(true)

    const [text, setText] = useState("")

    const [scope, animate] = useAnimate()

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prevState) => !prevState)
        }, 8000)
        if (state) {
            setText("Breathe In")
            animate('div', { transform: 'scale(2)' }, { duration: 4 })
            if (shouldVibrate)
                navigator.vibrate(vibrationIntervals)
            setTimeout(() => setText("Hold"), 4000)
        } else {
            setText("Breathe Out")
            animate('div', { transform: 'scale(1)' }, { duration: 4 })
            if (shouldVibrate)
                navigator.vibrate(vibrationIntervals.reverse())
            setTimeout(() => setText("Hold"), 4000)
            // navigator.vibrate(1000)
        }
        return () => clearInterval(interval)
    }, [state, animate, shouldVibrate])

    return (
        <Container ref={scope} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", alignItems: "center" }}>
            <h1 style={{ textAlign: "center" }}>{text}</h1>
            <Box sx={{ height: 100, width: 100, borderRadius: "50%", backgroundColor: "blue", marginTop: "100px" }} />

        </Container>
    )
};
