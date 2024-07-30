package com.example.vehiculos.Controller;

import com.example.vehiculos.Entity.VehiculoEntity;
import com.example.vehiculos.Service.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/vehiculo")
public class VehiculoController {

    @Autowired
    private final VehiculoService vehiculoService;

    public VehiculoController(VehiculoService vehiculoService) {
        this.vehiculoService = vehiculoService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<VehiculoEntity>> listarVehiculos(){
        List<VehiculoEntity> listaVehiculos=vehiculoService.getVehiculos();
        return ResponseEntity.ok(listaVehiculos);
    }

    @GetMapping("/{patente}")
    public ResponseEntity<VehiculoEntity> getVehiculoById(@PathVariable String patente){
        VehiculoEntity vehiculo= vehiculoService.getVehiculoById(patente);
        return ResponseEntity.ok(vehiculo);
    }

    @PostMapping("/")
    public ResponseEntity<VehiculoEntity> saveVehiculo(@RequestBody VehiculoEntity vehiculo){
        VehiculoEntity nuevoVehiculo = vehiculoService.saveVehiculo(vehiculo);
        return new ResponseEntity<>(nuevoVehiculo, HttpStatus.CREATED);
    }
}
