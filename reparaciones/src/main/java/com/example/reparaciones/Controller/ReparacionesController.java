package com.example.reparaciones.Controller;


import com.example.reparaciones.Service.ReparacionesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Reparaciones")
public class ReparacionesController {
    @Autowired
    ReparacionesService reparacionesService;
}
