package com.server.VillageBase.Cottage;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// @Entity is used to map this class as a data entity
// It matches the datamodel in the database
// @Table is used to specify the database table from which the data is read
@Entity
@Table(name = "mokki")
public class Cottage {
    // @Id specifies the primary key in the table
    // Variable names need be same as in the table
    @Id
    private int mokki_id;
    private int alue_id;
    private String postinro;
    private int henkilomaara;
    private double hinta;
    private String mokkinimi;
    private String katuosoite;
    private String kuvaus;
    private String varustelu;

    public Cottage() {
    }

public Cottage(int mokki_id, int alue_id, String postinro, int henkilomaara, double hinta, String mokkinimi, String katuosoite, String kuvaus, String varustelu) {
    this.mokki_id = mokki_id;
    this.alue_id = alue_id;
    this.postinro = postinro;
    this.henkilomaara = henkilomaara;
    this.hinta = hinta;
    this.mokkinimi = mokkinimi;
    this.katuosoite = katuosoite;
    this.kuvaus = kuvaus;
    this.varustelu = varustelu;
}

    public int getMokki_id() {
        return mokki_id;
    }

    public void setMokki_id(int mokki_id) {
        this.mokki_id = mokki_id;
    }

    public int getAlue_id() {
        return alue_id;
    }

    public void setAlue_id(int alue_id) {
        this.alue_id = alue_id;
    }

    public String getPostinro() {
        return postinro;
    }

    public void setPostinro(String postinro) {
        this.postinro = postinro;
    }

    public int getHenkilomaara() {
        return henkilomaara;
    }

    public void setHenkilomaara(int henkilomaara) {
        this.henkilomaara = henkilomaara;
    }

    public double getHinta() {
        return hinta;
    }

    public void setHinta(double hinta) {
        this.hinta = hinta;
    }

    public String getMokkinimi() {
        return mokkinimi;
    }

    public void setMokkinimi(String mokkinimi) {
        this.mokkinimi = mokkinimi;
    }

    public String getKatuosoite() {
        return katuosoite;
    }

    public void setKatuosoite(String katuosoite) {
        this.katuosoite = katuosoite;
    }

    public String getKuvaus() {
        return kuvaus;
    }

    public void setKuvaus(String kuvaus) {
        this.kuvaus = kuvaus;
    }

    public String getVarustelu() {
        return varustelu;
    }

    public void setVarustelu(String varustelu) {
        this.varustelu = varustelu;
    }
    }


