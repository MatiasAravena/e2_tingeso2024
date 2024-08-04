package com.example.lista.de.reparacioes.Service;


import com.example.lista.de.reparacioes.Controller.ListaRepController;
import com.example.lista.de.reparacioes.Entity.ListaReparaciones;
import com.example.lista.de.reparacioes.Repository.ListaRepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListaRepService {

    @Autowired
    ListaRepRepository listaRepRepository;

    public List<ListaReparaciones> getListaReparaciones() {return listaRepRepository.findAll(); }
}
