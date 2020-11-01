import React, {useEffect, useState}from 'react';
import getTopTen from '../../requestsToServer/getTopTen';
import {Table} from 'react-bootstrap';
import './TopTen.css';

interface Anagram {
    word: string,
    times: number
}

const TopTen = () => {
    const [topTenAnagrams, setTopTenAnagrams] = useState([]);

    useEffect(() => {
        getTopTenHandler();
    }, []);

    const getTopTenHandler = async() => {
        const initial = await getTopTen.get('').catch(err => console.log(err));
        if(!initial) return;
        const anagrams: Anagram[] = initial.data;
        setTopTenAnagrams(anagrams);

        const eventSource = new EventSource('http://localhost:5000/api/anagrams/live');
        eventSource.onmessage = (msg) => {
            console.log('new msg');
            const data: Anagram[] = JSON.parse(msg.data);
            setTopTenAnagrams(data);
        };
    };

    return(
        <div className="TopTenTable">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Word</th>
                    <th>Anagram</th>
                    <th>Times</th>
                </tr>
                </thead>
                <tbody>
                {topTenAnagrams.map((anagram: Anagram, index: number) => {
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{anagram.word}</td>
                            <td>{anagram.word.split('').reverse().join('')}</td>
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