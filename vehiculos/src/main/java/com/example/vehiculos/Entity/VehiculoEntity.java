package com.example.vehiculos.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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
