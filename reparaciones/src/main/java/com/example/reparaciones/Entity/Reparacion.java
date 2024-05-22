package com.example.reparaciones.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reparacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String patente;
    private Date fechaIng;
    private Time horaIng;
    private Integer montoTotalReparaciones;
    private Integer recargos;
    private Integer descuentos;
    private Integer iva;
    private Integer total;
    private Date fechaSal;
    private Time horaSal;
    private Date fechaRet;
    private Time horaRet;
}
