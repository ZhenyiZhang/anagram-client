import React, {useState} from 'react';
import postAnagram from '../../requestsToServer/postAnagram';
import checkWord from './functions/checkWord';
import isAnagram from './functions/isAnagram';
import {FormControl, InputGroup, Button, Alert}from 'react-bootstrap';
import './AnagramForm.css';

const FeedbackType = {
    error: 'danger',
    notAnagram: 'info',
    anagram: 'success'
};

const AnagramForm = () => {
    const [wordA, setWordA] = useState('');
    const [wordB, setWordB] = useState('');

    const [feedback, setFeedback] = useState('');
    const [feedbackType, setFeedbackType] = useState('');
    const [feedbackHeading, setFeedbackHeading] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);

    const createFeedback = (type: string, message: string, heading: string) => {
        setFeedbackType(type);
        setFeedbackHeading(heading);
        setFeedback(message);
        setShowFeedback(true);
    };

    const removeFeedback = () => {
      setShowFeedback(false);
      setFeedback('');
    };

    const onClickHandler = () => {
        try {
            removeFeedback();
            checkWord(wordA);
            checkWord(wordB);
        } catch(err) {
            createFeedback(FeedbackType.error, err.message, 'Word Error');
            return;
        }

        if(!isAnagram(wordA.toLowerCase(), wordB.toLowerCase())) {
            const msg = `${wordA} and ${wordB} are not anagrams`;
            createFeedback(FeedbackType.notAnagram, msg, 'Not Anagram');
            return;
        }

        const msg = `${wordA} and ${wordB} are anagrams`;
        createFeedback(FeedbackType.anagram, msg, 'Anagram!');
        postAnagram.post('', {wordA: wordA.toLowerCase(), wordB: wordB.toLowerCase()})
            .catch(err => {console.log(err);});
    };

    return(
        <div className='AnagramForm'>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Type words here</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    id="first-word-input"
                    placeholder="First Word"
                    aria-label="First Word"
                    aria-describedby="basic-addon1"
                    onChange={(event) => {setWordA(event.target.value.trim())}}
                />
                <FormControl
                    id="second-word-input"
                    placeholder="Second Word"
                    aria-label="Second Word"
                    aria-describedby="basic-addon1"
                    onChange={(event) => setWordB(event.target.value.trim())}
                />
                <InputGroup.Append>
                    <Button variant="outline-info" onClick={onClickHandler}>Check</Button>
                </InputGroup.Append>
            </InputGroup>
            <Alert
                className="Alert"
                variant={feedbackType}
                show={showFeedback}
                onClose={() => setShowFeedback(false)}
                dismissible>
                <Alert.Heading
                    id="alert-heading"
                    style={{fontWeight: 400, fontSize: "large"}}>
                    {feedbackHeading}
                </Alert.Heading>
                <p id="feedback">{feedback}</p>
            </Alert>
        </div>
    );
};

export default AnagramForm;