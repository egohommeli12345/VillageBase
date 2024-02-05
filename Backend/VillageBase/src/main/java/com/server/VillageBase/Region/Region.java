package com.server.VillageBase.Region;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "alue")
public class Region<R, S> {
    @Id
    private String alue_id;
    private String nimi;

    public Region() {
    }

    public Region(String alue_id, String nimi) {
        this.alue_id = alue_id;
        this.nimi = nimi;
    }

    public String getAlue_alue_id() {
        return alue_id;
    }

    public void setAlue_alue_id(String alue_id) {
        this.alue_id = alue_id;
    }

    public String getNimi() {
        return nimi;
    }

    public void setalue(String nimi) {
        this.nimi = nimi;
    }
}
