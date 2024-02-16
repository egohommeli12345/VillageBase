import { useEffect, useState } from "react";
import styles from "./ServicePage.module.css";
import { ServiceFetch } from "./ServiceFetch";
import {ServiceInterface} from "./ServiceInterface";

// Function for ServicePage
export default function ServicePage() {
  // useState hook for mapping the services to ServiceInterface objects
  const [services, setServices] = useState<ServiceInterface[]>([]);
  // const [sortedServices, setSortedServices>] = useState<ServiceInterface[]>([]);

  // State to track the active container
  const [activeContainerId, setActiveContainerId] = useState<number | null>(null);

  // Function to toggle the active container
  const makeActive = (id: number) => {
    setActiveContainerId(id);
  };

  useEffect(() => {
    ServiceFetch().then((data) => {
      setServices(data);
      setSortedServices([...data].sort(Compareservices)); // Ensure you create a copy of data before sorting
    });
  }, []);

  return (
    <div className={styles.serviceBG}>
      <div className={styles.serviceTitle}>Palvelut</div>
      <div className={styles.serviceCardsContainer}>
        {sortedServices.map((service) => (
          <div
            className={`${styles.card} ${activeContainerId === service.palvelu_id ? styles.active : ''}`}
            key={service.palvelu_id}
            onClick={() => makeActive(service.palvelu_id)}
          >
            <div className={styles.cardHeader}>
              {service.nimi} {service.palvelu_id}
            </div>
            <div className={styles.cardBody}>
              <p><strong>Nimi:</strong> {service.nimi}</p>
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

function Compareservices(a: ServiceInterface, b: ServiceInterface) {
  return a.palvelu_id - b.palvelu_id;
}