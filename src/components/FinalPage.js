import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function FinalPage({ data, handleClick }) {
    const form = useRef();


    // const arr = data.map()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lesz7im', 'template_f0tg25q', form.current, {
                publicKey: '8QvNVflk_6739D0nz',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        handleClick()
    };

    console.log(data)
    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <h4>First Questionnaire</h4>
                <label>Question 1</label>
                <input type="number" name="1Q1" value={data[0].questionOne} readOnly />
                <label>Question 2</label>
                <input type="number" name="1Q2" value={data[0].questionTwo} readOnly />
                <label>Question 3</label>
                <input type="number" name="1Q3" value={data[0].questionThree} readOnly />
            </div>
            <div>
                <h4>Second Questionnaire</h4>
                <label>Question 1</label>
                <input type="number" name="2Q1" value={data[1].questionOne} readOnly />
                <label>Question 2</label>
                <input type="number" name="2Q2" value={data[1].questionTwo} readOnly />
                <label>Question 3</label>
                <input type="number" name="2Q3" value={data[1].questionThree} readOnly />
            </div>
            <div>
                <h4>Third Questionnaire</h4>
                <label>Question 1</label>
                <input type="number" name="3Q1" value={data[2].questionOne} readOnly />
                <label>Question 2</label>
                <input type="number" name="3Q2" value={data[2].questionTwo} readOnly />
                <label>Question 3</label>
                <input type="number" name="3Q3" value={data[2].questionThree} readOnly />
            </div>
            <div>
                <h4>Survey</h4>
                <label>Gender</label>
                <input type="text" name="gender" value={data[3].gender} readOnly />
                <br></br>
                <label>Age</label>
                <input type="text" name="age" value={data[3].age} readOnly />
                <br></br>
                <label>Occupation</label>
                <input type="text" name="occupation" value={data[3].occupation} readOnly />
                <br></br>
                <label>Technology Usage</label>
                <input type="text" name="technologyUsage" value={data[3].technologyUsage} readOnly />
                <br></br>
                <label>Practised Meditation</label>
                <input type="text" name="practisedMeditation" value={data[3].practisedMeditation} readOnly />
                <br></br>
                <label>Practice Breathing</label>
                <input type="text" name="practiceBreathing" value={data[3].practiceBreathing} readOnly />
                <br></br>
                <label>Question 7</label>
                <input type="number" name="questionSeven" value={data[3].questionSeven} readOnly />
                <br></br>
                <label>Question </label>
                <input type="text" name="question" value={data[3].question} readOnly />
                <br></br>
            </div>
            <input type="submit" value="Send" />

        </form>
    );
};

