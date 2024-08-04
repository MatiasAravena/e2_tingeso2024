package com.example.lista.de.reparacioes.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListaReparaciones {

    @Id
    private Long id;
    private String tipomotor;
    private Integer monto;

}
