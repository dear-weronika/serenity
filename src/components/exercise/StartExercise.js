import { Box, Button, } from '@mui/material';
export default function StartExercise({ handleClick }) {

    return (
        <div>
            <Box sx={{ width: 300, p: 2 }}>
                <h3>You're about to begin your breathing exercises.</h3>
                <p> The method you're about to perform is called "box breathing" and involves: <br></br>Breathe in -- Hold -- Breathe out -- Hold <br></br>  all for the same amount of time.</p>
                <p> This exercise will last about a <strong>1 minute</strong>. Remember to hold your phone in your hand as one of exercieses might include a gentle vibration.</p>
                <p> So let's take a few moments to relax. </p>
                <p> Find a comfortable position and press start </p>
                <Button variant="contained" onClick={handleClick}>Start Breathing Exercise</Button>
            </Box>
        </div>
    )
};
