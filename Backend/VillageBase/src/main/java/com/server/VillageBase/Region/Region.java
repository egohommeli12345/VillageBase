package com.server.VillageBase.Region;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// @Entity is used to map this class as a data entity
// It matches the datamodel in the database
// @Table is used to specify the database table from which the data is read
@Entity
@Table(name = "alue")
public class Region {
    // @Id specifies the primary key in the table
    // Variable names need be same as in the table
    @Id
    private String alue_id;
    private String nimi;

    public Region() {
    }

    public Region(String alue_id, String nimi) {
        this.alue_id = alue_id;
        this.nimi = nimi;
    }

    public String getAlue_id() {
        return alue_id;
    }

    public void setAlue_id(String alue_id) {
        this.alue_id = alue_id;
    }

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }
}
