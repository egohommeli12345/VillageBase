package com.server.VillageBase.City;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "posti")
public class City {
    @Id
    private String postinro;
    private String toimipaikka;

    public City() {
    }

    public City(String postinro, String toimipaikka) {
        this.postinro = postinro;
        this.toimipaikka = toimipaikka;
    }

    public String getPostinro() {
        return postinro;
    }

    public String getToimipaikka() {
        return toimipaikka;
    }
}
