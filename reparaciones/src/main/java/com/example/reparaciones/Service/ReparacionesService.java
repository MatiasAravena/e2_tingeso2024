package com.example.reparaciones.Service;


import com.example.reparaciones.Entity.Reparacion;
import com.example.reparaciones.Repository.ReparacionesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReparacionesService {
    @Autowired
    ReparacionesRepository reparacionesRepository;

    public List<Reparacion> getAll(){
        return reparacionesRepository.findAll();
    }
}
