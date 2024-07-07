package com.example.reportes.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reportes {
    @Id
    private String patente;
    //private List<ReparacionesEntity> listaReparaciones;


    public void setId(String patente) {
        this.patente = patente;
    }

    public String getId() {
        return patente;
    }
}
