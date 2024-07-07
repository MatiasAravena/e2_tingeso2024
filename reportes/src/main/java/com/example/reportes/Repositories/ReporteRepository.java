package com.example.reportes.Repositories;

import com.example.reportes.Entity.Reportes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReporteRepository extends JpaRepository<Reportes, String> {

}
