import React, { useEffect, useState } from "react";
import styles from "./AddRegionPage.module.css";
import { RegionAdd, RegionMAXID } from "./RegionFetch";
import { useToolState } from "../MainComponents/ToolStateContext";
import { RegionInterface } from "./RegionInterface";

const AddRegionPage = ({
    setRegions,
}: {
    setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>;
}) => {
    const [regionName, setRegionName] = useState("");
    const [regionMaxId, setRegionMaxId] = useState("");
    // Lisätään tarvittaessa lisää

    const { addBtn, setAddBtn } = useToolState();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        //  Tässä kohtaa lomakkeen tiedot ovat valmiina lähetettäväksi backendiin
        // Lähetä tiedot backendiin tässä
        const newRegion: RegionInterface = {
            alue_id: Number(regionMaxId ? regionMaxId : 0),
            nimi: regionName,
        };

        await RegionAdd(newRegion, setRegions).then((data) => {
            console.log(data);
            setAddBtn(!addBtn);
            setRegionMaxId("");
            setRegionName("");
        });
        window.location.reload();
    };

    useEffect(() => {
        RegionMAXID().then((data) => {
            setRegionMaxId(data + 1);
        });
    }, [addBtn]);

    return (
        <div className={styles.formTemplate}>
            <h1>Lisää uusi alue</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="regionId">Alueen ID:</label>
                    <input
                        id="regionId"
                        type="text"
                        value={regionMaxId}
                        disabled
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="regionName">Alueen nimi:</label>
                    <input
                        id="regionName"
                        type="text"
                        value={regionName}
                        onChange={(e) => setRegionName(e.target.value)}
                    />
                </div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Lisää alue</button>
            </form>
        </div>
    );
};

export default AddRegionPage;
