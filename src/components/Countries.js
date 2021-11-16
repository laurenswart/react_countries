import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    useEffect( () => {
        if (playOnce) {
            axios
                .get("https://restcountries.com/v2/all")
                .then( response => {
                    setData(response.data);
                    setPlayOnce(false);
                });
        }
        

        const sortedCountries = () => {
            const countryObj = Object.keys(data).map( i => data[i]);
            const sortedArray = countryObj.sort ( (a,b) => b.population-a.population);
            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        }   

        sortedCountries();
        
        
    }, [data, playOnce, rangeValue]);

    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange={e => setRangeValue(e.target.value)}/>
                <ul>
                {radios.map( x => 
                    <li key={x}>
                        <input type="radio" id={x} value={x} checked={ x === selectedRadio} onChange={ e => setSelectedRadio(e.target.value)}/>
                        <label htmlFor={x}>{x}</label>
                    </li>
                )}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5 onClick={ () => setSelectedRadio('')}>Annuler la recherche</h5>}
            </div>
            <ul className="countries-list">
                {sortedData
                    .filter( x => x.region.indexOf(selectedRadio)!==-1)
                    .map( x => <Card country={x} key={x.name}/>)}
            </ul>
        </div>
    );

};

export default Countries;