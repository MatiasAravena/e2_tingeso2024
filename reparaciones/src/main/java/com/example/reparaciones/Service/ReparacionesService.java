package com.example.reparaciones.Service;


import com.example.reparaciones.Entity.Reparacion;
import com.example.reparaciones.Repository.ReparacionesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;


@Service
public class ReparacionesService {
    @Autowired
    ReparacionesRepository reparacionesRepository;

    public List<Reparacion> getAll(){
        return reparacionesRepository.findAll();
    }

    public Reparacion saveReparacion(Reparacion reparacion){
        return reparacionesRepository.save(reparacion);
    }

    public Reparacion getReparacionById(String patente){
        return reparacionesRepository.findByPatente(patente);
    }

    public Double descuentoReparaciones(Integer nReparaciones, String tipomotor){
        if(nReparaciones>=1 && nReparaciones<=2){
            if(tipomotor.equals("Gasolina")){return 0.05;}
            if(tipomotor.equals("Diesel")){return 0.07;}
            if(tipomotor.equals("Hibrido")){return 0.1;}
            if(tipomotor.equals("Electrico")){return 0.08;}
        }
        if(nReparaciones>=3 && nReparaciones<=5){
            if(tipomotor.equals("Gasolina")){return 0.1;}
            if(tipomotor.equals("Diesel")){return 0.12;}
            if(tipomotor.equals("Hibrido")){return 0.15;}
            if(tipomotor.equals("Electrico")){return 0.13;}
        }
        if(nReparaciones>=6 && nReparaciones<=9){
            if(tipomotor.equals("Gasolina")){return 0.15;}
            if(tipomotor.equals("Diesel")){return 0.17;}
            if(tipomotor.equals("Hibrido")){return 0.2;}
            if(tipomotor.equals("Electrico")){return 0.18;}
        }
        if(nReparaciones>=10){
            if(tipomotor.equals("Gasolina")){return 0.2;}
            if(tipomotor.equals("Diesel")){return 0.22;}
            if(tipomotor.equals("Hibrido")){return 0.25;}
            if(tipomotor.equals("Electrico")){return 0.23;}
        }
        return 0.0;
    }

    public Double descuentoDiaAtencion(Reparacion vehiculo){
        LocalDateTime hora = vehiculo.getFechaIng().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
        if(hora.getHour() >= 9 && hora.getHour() <= 12){
            if(hora.getMinute() == 0 && hora.getSecond() == 0){
                return 0.1;
            }
        }
        return 0.0;
    }
}
