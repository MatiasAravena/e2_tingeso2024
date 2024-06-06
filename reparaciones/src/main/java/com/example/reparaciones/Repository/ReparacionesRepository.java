package com.example.reparaciones.Repository;

import com.example.reparaciones.Entity.Reparacion;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ReparacionesRepository extends JpaRepository<Reparacion, String> {
    public Reparacion findByPatente(String patente);
}
