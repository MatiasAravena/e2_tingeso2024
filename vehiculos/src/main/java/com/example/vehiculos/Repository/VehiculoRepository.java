package com.example.vehiculos.Repository;


import com.example.vehiculos.Entity.VehiculoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculoRepository extends JpaRepository<VehiculoEntity,   String> {
    public VehiculoEntity findByPatente(String patente);
}
