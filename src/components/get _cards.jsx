import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardService from '../services/service';
import '../App.css';
const GetAllcards = () => {
    const [CardList, setCardList] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const data = await CardService.fetchCards();
                setCardList(data);
                console.log('Fetched data:', data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setError('Failed to fetch shelter data.');
            }
        };

        fetchCards();
    }, []);



    return (
        <div >
           
        </div>
    );
};

export default GetAllShelters;
