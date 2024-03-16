import { Box, Button, } from '@mui/material';
export default function StartExercise({ handleClick }) {

    return (
        <div>
            <Box sx={{ width: 300, p: 2 }}>
                <h3>Step right into Relaxation Exercises</h3>
                    <p>Boxing method 4-4 involves inhaling, holding, exhaling, and holding the breath for equal counts to receive immediate stress relief.</p>
                    <p>This exercise will last about a <strong>minute</strong>. Remember to hold your phone in your hand to fully experience it.</p>
                    <p> So let's take a few moments to relax. </p>
                    <p> Find a comfortable position and press start </p>
                <Button variant="contained" onClick={handleClick}>Start</Button>
            </Box>
        </div>
    )
};
