package com.example.vehiculos.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vehiculo")
public class VehiculoEntity {

    @Id
    private String patente;
    private String marca;
    private String modelo;
    private String tipoauto;
    private Integer fabricacion;
    private String tipomotor;
    private Integer asientos;
}
