package com.example.lista.de.reparacioes.Repository;


import com.example.lista.de.reparacioes.Entity.ListaReparaciones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListaRepRepository extends JpaRepository<ListaReparaciones, Long> {
}
