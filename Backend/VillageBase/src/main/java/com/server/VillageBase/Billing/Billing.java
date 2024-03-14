package com.server.VillageBase.Billing;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// @Entity is used to map this class as a data entity
// It matches the datamodel in the database
// @Table is used to specify the database table from which the data is read
@Entity
@Table(name = "lasku")
public class Billing {
    // @Id specifies the primary key in the table
    // Variable names need be same as in the table
    @Id
    private int lasku_id;
    private int varaus_id;
    private double summa;
    private double alv;
    private int maksettu;

    public Billing() {
    }

    public Billing(int lasku_id, int varaus_id, double summa, double alv, int maksettu) {
        this.lasku_id = lasku_id;
        this.varaus_id = varaus_id;
        this.summa = summa;
        this.alv = alv;
        this.maksettu = maksettu;
    }

    public int getLasku_id() {
        return lasku_id;
    }

    public void setLasku_id(int lasku_id) {
        this.lasku_id = lasku_id;
    }

    public int getVaraus_id() {
        return varaus_id;
    }

    public void setVaraus_id(int varaus_id) {
        this.varaus_id = varaus_id;
    }

    public double getSumma() {
        return summa;
    }

    public void setSumma(double summa) {
        this.summa = summa;
    }

    public double getAlv() {
        return alv;
    }

    public void setAlv(double alv) {
        this.alv = alv;
    }

    public int getMaksettu() {
        return maksettu;
    }

    public void setMaksettu(int maksettu) {
        this.maksettu = maksettu;
    }
}
