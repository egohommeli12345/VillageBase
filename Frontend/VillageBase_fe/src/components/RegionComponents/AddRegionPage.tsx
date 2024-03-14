import React, { useState } from "react";

const AddRegionPage = () => {
    const [regionName, setRegionName] = useState('');
    const [location, setLocation] = useState('');
    // Lisätään tarvittaessa lisää

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //  Tässä kohtaa lomakkeen tiedot ovat valmiina lähetettäväksi backendiin
        console.log(regionName, location);
        // Lähetä tiedot backendiin tässä
    };

    return (
        <div>
            <h1>Lisää uusi alue</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="regionName">Alueen nimi:</label>
                    <input
                        id="regionName"
                        type="text"
                        value={regionName}
                        onChange={(e) => setRegionName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="location">Sijainti:</label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Lisää alue</button>
            </form>
        </div>
    );
};

export default AddRegionPage;
