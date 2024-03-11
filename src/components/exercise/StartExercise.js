import {Box, Button,} from '@mui/material';
export default function StartExercise({handleClick}) {

    return (
        <div>
            <Box sx={{ width: 400, p: 2 }}>
            <h3>Hey, you're about to start Box Breathing Exercise 4-4  </h3>
                <h4>Box breathing is a simple yet effective meditation technique involving inhaling, holding, exhaling, and holding the breath for equal counts, typically 4 seconds each.</h4>
           
                     {/* <p>Inhale (4 seconds): Start by inhaling slowly and deeply through your nose for a count of four seconds. Focus on filling your lungs completely with air.</p>

                     <p> Hold 4 seconds: After inhaling, hold your breath for another four seconds. Try to keep your breath comfortable and steady during this pause.</p>

                     <p> Exhale 4 seconds: Exhale slowly and steadily through your mouth or nose for four seconds, emptying your lungs completely. Focus on releasing tension and stress as you breathe out.</p>

                     <p>  Hold 4 seconds: Finally, after exhaling, hold your breath for another four seconds before beginning the next inhale. Use this moment to relax and prepare for the next breath cycle.</p> */}

            <Button variant="contained" onClick={handleClick}>Start</Button>
            </Box>
        </div>
    )
};
