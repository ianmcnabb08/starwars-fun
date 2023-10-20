import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StarWarsPeople() {
    const [people, setPeople] = useState([]);
    const apiUrl = 'https://swapi.dev/api/people/';

    useEffect(() => {
    const fetchPeople = () => {
        axios.get(apiUrl)
        .then((response) => {
            if (response.status !== 200) {
            throw new Error('Network response was not ok');
            }
            return response.data.results;
        })
        .then((data) => {
            setPeople(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };

    fetchPeople();
    }, []);

    return (
    <div>
        <h1>List of Star Wars People</h1>
        <ul>
        {people.map((person, index) => (
        <li key={index}>{person.name}</li>
        ))}
        </ul>
    </div>
    );
}
export default StarWarsPeople;
