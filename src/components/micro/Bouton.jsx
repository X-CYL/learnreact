import React from 'react';
import './Bouton.css'

const Bouton = (props) => {
    return (
        <button className="bouton">
            {props.texte}
        </button>
    );
};

export default Bouton;