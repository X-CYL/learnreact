import React from 'react';
import './Formulaire.css'

const Formulaire = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="test" > Texte à saisir pour les tests
                    <input type="text" name="test" />
                </label>
            </form>
        </div>
    );
};

export default Formulaire;