import React, { useState } from 'react';
import './RecipeCardDesign.css';
function Buscador({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className="buscador" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit">Buscar</button>
        </form>
    );
}

export default Buscador;