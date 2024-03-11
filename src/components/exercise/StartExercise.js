import {Box, Button,} from '@mui/material';
export default function StartExercise({handleClick}) {

    return (
        <div>
            <Box sx={{ width: 400, p: 2 }}>
            <h3>Hello, Welcome to Box Breathing Exercises</h3>
                <p>Box breathing is a simple meditation technique involving inhaling, holding, exhaling, and holding the breath for equal counts, typically 4 seconds each.</p>
                <p>Plese find a comfortable position and press start</p>
                   
            <Button variant="contained" onClick={handleClick}>Start</Button>
            </Box>
        </div>
    )
};
