import React from 'react';

function numberFormat(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

const Card = (props) => {
    const { country } = props; //== const country = props.country
    return (
        <li className="card">
            <img src={country.flag} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>pop. {numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;