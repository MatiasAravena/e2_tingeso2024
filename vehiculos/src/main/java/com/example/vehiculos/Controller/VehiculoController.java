package com.example.vehiculos.Controller;

import com.example.vehiculos.Entity.VehiculoEntity;
import com.example.vehiculos.Service.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/vehiculo")
public class VehiculoController {

    @Autowired
    VehiculoService vehiculoService;

    @GetMapping
    public ResponseEntity<List<VehiculoEntity>> getAll(){
        List<VehiculoEntity> vehiculos = vehiculoService.getAll();
        return ResponseEntity.ok(vehiculos);
    }
}
