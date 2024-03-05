import React, { useState } from "react";

const AddServicePage = () => {
    const [serviceName, setServiceName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // Lisätään tarvittaessa lisää

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //  Tässä kohtaa lomakkeen tiedot ovat valmiina lähetettäväksi backendiin
        console.log(serviceName, description, price);
        // Lähetä tiedot backendiin tässä
    };

    return (
        <div>
            <h1>Lisää uusi palvelu</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="serviceName">Nimi:</label>
                    <input
                        id="serviceName"
                        type="text"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Hinta:</label>
                    <input
                        id="price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Kuvaus:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Lisää palvelu</button>
            </form>
        </div>
    );
};

export default AddServicePage;