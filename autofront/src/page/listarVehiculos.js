//import './App.css';

import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import vehiculosService from "../service/vehiculos.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const ListarVehiculos=() =>{
  const [vehiculos, setVehiculos] = useState([]);
  const navigate = useNavigate;

  const init =() =>{
    vehiculosService
    .getAll()
    .then((response) =>{
      console.log("listando vehiculos",response.data);
      setVehiculos(response.data);
    })
    .catch((error) => {
      console.log("se ha producido un error", error);
    });
  };

  useEffect(() =>{
    init();
  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Link
        to="/agregar"
        style={{ textDecoration: "none", marginBottom: "1rem" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<PersonAddIcon />}
        >
          Añadir Vehiculo
        </Button>
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", marginBottom: "1rem" }}
      >
        <Button
          variant="contained"
          color="primary"
        >
          Pagina principal
        </Button>
      </Link>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Patente
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Marca
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Modelo
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Tipo de auto
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Año de fabricacion
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Tipo de motor
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Nº asientos
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehiculos.map((vehiculo) => (
            <TableRow
              key={vehiculo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{vehiculo.patente}</TableCell>
              <TableCell align="center">{vehiculo.marca}</TableCell>
              <TableCell align="center">{vehiculo.modelo}</TableCell>
              <TableCell align="center">{vehiculo.tipoauto}</TableCell>
              <TableCell align="center">{vehiculo.fabricacion}</TableCell>
              <TableCell align="center">{vehiculo.tipomotor}</TableCell>
              <TableCell align="center">{vehiculo.asientos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          );
  }
                
export default ListarVehiculos;