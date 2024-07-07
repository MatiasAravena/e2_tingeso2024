//import './App.css';

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import reparacionService from "../service/vehiculos.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";


const ListarReparaciones=() =>{
  const [reparaciones, setReparaciones] = useState([]);
  const navigate = useNavigate;

  const init =() =>{
    reparacionService
    .getAll()
    .then((response) =>{
      console.log("listando reparaciones",response.data);
      setReparaciones(response.data);
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
      <Link
        to="/agregareparaciones"
        style={{ textDecoration: "none", marginBottom: "1rem" }}
      >
        <Button
          variant="contained"
          color="primary"
        >
          Agregar Reparacion
        </Button>
      </Link>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Patente
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Fecha de ingreso
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Hora de ingreso
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Tipo de reparacion
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Monto total
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Fecha de salida
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Hora de salida
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Fecha de retiro
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Hora de retiro
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reparaciones.map((reparacion) => (
            <TableRow
              key={reparacion.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{reparacion.patente}</TableCell>
              <TableCell align="center">{reparacion.fechaIng}</TableCell>
              <TableCell align="center">{reparacion.horaIng}</TableCell>
              <TableCell align="center">{reparacion.tiporep}</TableCell>
              <TableCell align="center">{reparacion.monto}</TableCell>
              <TableCell align="center">{reparacion.fechaSal}</TableCell>
              <TableCell align="center">{reparacion.horaSal}</TableCell>
              <TableCell align="center">{reparacion.fechaRetiro}</TableCell>
              <TableCell align="center">{reparacion.horaRetiro}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          );
  }
                
export default ListarReparaciones;