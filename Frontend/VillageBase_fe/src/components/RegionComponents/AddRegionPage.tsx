import React, { useEffect, useState } from "react";
import styles from "./AddRegionPage.module.css";
import {
    GetRegionById,
    RegionAdd,
    RegionEdit,
    RegionMAXID,
} from "./RegionFetch";
import { useToolState } from "../MainComponents/ToolStateContext";
import { RegionInterface } from "./RegionInterface";

const AddRegionPage = ({
    setRegions,
    regionId,
}: {
    setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>;
    regionId?: number;
}) => {
    const [regionName, setRegionName] = useState<string>("");
    const [regionMaxId, setRegionMaxId] = useState("");
    const [regionId2, setRegionId2] = useState<number>();
    const [region, setRegion] = useState<RegionInterface>();
    // Lisätään tarvittaessa lisää

    const { addBtn, setAddBtn, editBtn } = useToolState();

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

    const handleEdit = async (event: React.FormEvent) => {
        event.preventDefault();
        //  Tässä kohtaa lomakkeen tiedot ovat valmiina lähetettäväksi backendiin
        // Lähetä tiedot backendiin tässä
        const newRegion: RegionInterface = {
            alue_id: Number(regionId ? regionId : 0),
            nimi: regionName,
        };
        console.log(newRegion);
        await RegionEdit(newRegion);
        window.location.reload();
    };

    useEffect(() => {
        RegionMAXID().then((data) => {
            setRegionMaxId(data + 1);
        });
    }, [addBtn]);

    useEffect(() => {
        if (regionId) {
            GetRegionById(regionId).then((data) => {
                setRegion(data);
            });
        }
    }, [editBtn, regionId]);

    useEffect(() => {
        setRegionName(region?.nimi);
        setRegionId2(region?.alue_id);
    }, [region]);

    return (
        <div className={styles.formTemplate}>
            {addBtn && (
                <>
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
                </>
            )}
            {editBtn && (
                <>
                    <h1>Muokkaa aluetta</h1>
                    <form onSubmit={handleEdit} className={styles.form}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="regionId">Alueen ID:</label>
                            <input
                                id="regionId"
                                type="text"
                                value={region?.alue_id}
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
                        <button type="submit">Hyväksy muutokset</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default AddRegionPage;
