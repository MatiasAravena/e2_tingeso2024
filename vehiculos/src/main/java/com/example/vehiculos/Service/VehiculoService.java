package com.example.vehiculos.Service;

import com.example.vehiculos.Entity.VehiculoEntity;
import com.example.vehiculos.Repository.VehiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculoService {

    @Autowired
    VehiculoRepository vehiculoRepository;

    public List<VehiculoEntity> getAll(){
        return vehiculoRepository.findAll();
    }
}
