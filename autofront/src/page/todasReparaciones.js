//import './App.css';

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import listaRepService from "../service/listaRep.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";


const TodasReparaciones=() =>{
  const [listaReparaciones, setListaReparaciones] = useState([]);
  const navigate = useNavigate;

  const init =() =>{
    listaRepService
    .getAll()
    .then((response) =>{
      console.log("listando tipo de reparaciones",response.data);
      setListaReparaciones(response.data);
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
              Id de reparacion
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Nombre de reparacion
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Tipo de motor
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Monto a pagar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listaReparaciones.map((tipoReparacion) => (
            <TableRow
              key={tipoReparacion.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{tipoReparacion.idRep}</TableCell>
              <TableCell align="center">{tipoReparacion.nombreRep}</TableCell>
              <TableCell align="center">{tipoReparacion.tipomotor}</TableCell>
              <TableCell align="center">{tipoReparacion.monto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          );
  }
                
export default TodasReparaciones;