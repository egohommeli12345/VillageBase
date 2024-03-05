import { useEffect, useState } from "react";
import styles from "./ServicePage.module.css";
import { ServiceFetch } from "./ServiceFetch";
import {ServiceInterface} from "./ServiceInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";

// Function for ServicePage
export default function ServicePage() {
  const {sortType} = useSortType();
  // useState hook for mapping the services to ServiceInterface objects
  const [services, setServices] = useState<ServiceInterface[]>([]);

  // State to track the active container
  const [activeContainerId, setActiveContainerId] = useState<number | null>(null);

  // Function to toggle the active container
  const makeActive = (id: number) => {
    setActiveContainerId(id);
  };

  useEffect(() => {
    ServiceFetch().then((data) => {
      setServices(SortItems(sortType, data, "palvelu_id"));
    });
  }, [sortType]);

  return (
    <div className={styles.serviceBG}>
      <div className={styles.serviceTitle}>Palvelut</div>
      <div className={styles.serviceCardsContainer}>
        {services.map((service) => (
          <div
            className={`${styles.card} ${activeContainerId === service.palvelu_id ? styles.active : ''}`}
            key={service.palvelu_id}
            onClick={() => makeActive(service.palvelu_id)}
          >
            <div className={styles.cardHeader}>
              {service.nimi} {service.palvelu_id}
            </div>
            <div className={styles.cardBody}>
              <p><strong>Hinta:</strong> {service.hinta}€</p>
              <p><strong>Kuvaus:</strong> {service.kuvaus}</p>
            </div>
            {/* <button className={styles.cardButton}>Lisätietoja</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}