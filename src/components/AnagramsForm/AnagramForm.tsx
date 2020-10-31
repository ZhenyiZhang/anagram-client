import React, {useState} from 'react';
import FormControl from 'react-bootstrap/FormControl';

const AnagramForm = () => {
    const [wordA, setWordA] = useState('');
    const [wordB, setWordB] = useState('');
    return(
        <div>
            <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </div>
    );
};

export default AnagramForm;