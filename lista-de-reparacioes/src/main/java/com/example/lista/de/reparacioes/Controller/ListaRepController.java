package com.example.lista.de.reparacioes.Controller;


import com.example.lista.de.reparacioes.Entity.ListaReparaciones;
import com.example.lista.de.reparacioes.Service.ListaRepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/listaReparaciones")
public class ListaRepController {

    @Autowired
    private final ListaRepService listaRepService;

    public ListaRepController(ListaRepService listaRepService) { this.listaRepService = listaRepService; }

    @GetMapping("/cotizar")
    public ResponseEntity<List<ListaReparaciones>> listarReparaciones(){
        List<ListaReparaciones> estaListaReparaciones=listaRepService.getListaReparaciones();
        return ResponseEntity.ok(estaListaReparaciones);
    }
}
