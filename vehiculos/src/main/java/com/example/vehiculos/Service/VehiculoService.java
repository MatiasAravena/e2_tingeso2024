package com.example.vehiculos.Service;

import com.example.vehiculos.Entity.VehiculoEntity;
import com.example.vehiculos.Repository.VehiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculoService {

    @Autowired
    VehiculoRepository vehiculoRepository;

    public List<VehiculoEntity> getVehiculos(){
        return vehiculoRepository.findAll();
    }
    public VehiculoEntity saveVehiculo(VehiculoEntity vehiculo){
        return vehiculoRepository.save(vehiculo);
    }
    public VehiculoEntity getVehiculoById(String patente){
        return vehiculoRepository.findByPatente(patente);
    }

    //verificar si vehiculo llegó por primera vez
    public boolean primeraVez(VehiculoEntity autito){
        return true;
    }
}
