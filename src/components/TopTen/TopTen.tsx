import React, {useEffect, useState}from 'react';
import getTopTen from '../../requestsToServer/getTopTen';
import {Table} from 'react-bootstrap';
import './TopTen.css';

interface Anagram {
    word: string,
    times: number
}
interface Props {
    mock? : Anagram[]
}

const TopTen = (props: Props) => {
    const [topTenAnagrams, setTopTenAnagrams] = useState([] as any);

    useEffect(() => {
        if(props.mock) {
            setTopTenAnagrams(props.mock);
        } else {
            getTopTenHandler();
        }
    }, [props.mock]);

    const getTopTenHandler = async() => {
        const initial = await getTopTen.get('').catch(err => console.log(err));
        if(!initial) return;
        const anagrams: Anagram[] = initial.data;
        setTopTenAnagrams(anagrams);

        const eventSource = new EventSource('http://localhost:5000/api/anagrams/live');
        eventSource.onmessage = (msg) => {
            const data: Anagram[] = JSON.parse(msg.data);
            setTopTenAnagrams(data);
        };
    };

    return(
        <div className="TopTenTable">
            <h5>Table below contains top ten words checked by all users in live</h5> <br/>
            <Table striped bordered hover responsive>
                {topTenAnagrams.length > 0 ?
                    (<thead>
                    <tr>
                        <th>#</th>
                        <th>Word</th>
                        <th>Anagram</th>
                        <th>Times</th>
                    </tr>
                    </thead>) : (<p>No anagrams yet</p>)
                }
                <tbody>
                {topTenAnagrams.map((anagram: Anagram, index: number) => {
                    const word = anagram.word;
                    const reverseWord = anagram.word.split('').reverse().join('');
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{word}</td>
                            <td>{reverseWord}</td>
                            <td>{anagram.times}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default TopTen;