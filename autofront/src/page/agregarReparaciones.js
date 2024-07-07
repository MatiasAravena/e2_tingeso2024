//import './App.css'
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import reparacionesService from "../service/vehiculos.service";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";

const AgregaReparacion = () => {
    const [patente, setPatente] = useState("");
    const [fechaIng, setFechaIng] = useState("");
    const [horaIng, setHoraIng] = useState("");
    const [tiporep, setTiporep] = useState("");
    const [montoRep, setMonto] = useState("");
    const [recargo, setRecargo] = useState("");
    const [descuento, setDescuento] = useState("");
    const [iva, setIva] = useState("");
    const [total, setTotal] = useState("");
    const [fechaSal, setFechaSal] = useState("");
    const [horaSal, setHoraSal] = useState("");
    const [fechaRetiro, setFechaRetiro] = useState("");
    const [horaRetiro, setHoraRetiro] = useState("");
    const { id } = useParams();
    const [tituloReparacionForm, setTituloReparacionForm] = useState("");
    const navigate = useNavigate();
  
    const saveReparaciones = (e) => {
      e.preventDefault();
  
      const reparacion = { patente, fechaIng, horaIng, tiporep, montoRep, recargo, descuento, iva, total, fechaSal, horaSal, fechaRetiro, horaRetiro, id };
      if (id) {
        reparacionesService
          .update(reparacion)
          .then((response) => {
            console.log("reparacion actualizado.", response.data);
            navigate("/reparaciones");
          })
          .catch((error) => {
            console.log(
              "Ha ocurrido un error al intentar actualizar datos de la reparacion.",
              error
            );
          });
      } else {
        reparacionesService
          .create(reparacion)
          .then((response) => {
            console.log("Reparacion añadida.", response.data);
            navigate("/reparaciones");
          })
          .catch((error) => {
            console.log(
              "Ha ocurrido un error al intentar crear una nueva reparacion.",
              error
            );
          });
      }
    };
  
    useEffect(() => {
      if (id) {
        setTituloReparacionForm("Editar Reparacion");
        reparacionesService
          .get(id)
          .then((reparacion) => {
            setPatente(reparacion.data.patente);
            setFechaIng(reparacion.data.fechaDen);
            setHoraIng(reparacion.data.horaIng);
            setTiporep(reparacion.data.tiporep);
            setMonto(reparacion.data.monto);
            setRecargo(reparacion.data.recargo);
            setDescuento(reparacion.data.descuento);
            setIva(reparacion.data.iva);
            setTotal(reparacion.data.total);
            setFechaSal(reparacion.data.fechaSal);
            setHoraSal(reparacion.data.horaSal);
            setFechaRetiro(reparacion.data.fechaRetiro);
            setHoraRetiro(reparacion.data.horaRetiro);
          })
          .catch((error) => {
            console.log("Se ha producido un error.", error);
          });
      } else {
        setTituloReparacionForm("Nueva Reparacion");
      }
    }, []);

    return(
        <div class='container'>
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            component="form"
          >
            <h3> {tituloReparacionForm} </h3>
            <hr />
            <form>
              <FormControl fullWidth>
                <TextField
                  id="patente"
                  label="Patente"
                  value={patente}
                  variant="standard"
                  onChange={(e) => setPatente(e.target.value)}
                  helperText="Ej. AAAA11"
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="fechaDen"
                  label="Fecha de entrada"
                  value={fechaIng}
                  variant="standard"
                  onChange={(e) => setFechaIng(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="horaIng"
                  label="Hora de entrada"
                  value={horaIng}
                  variant="standard"
                  onChange={(e) => setHoraIng(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="tiporep"
                  label="Tipo de reparacion"
                  select
                  value={tiporep}
                  variant="standard"
                  onChange={(e) => setTiporep(e.target.value)}
                >
                <MenuItem value={"1"}>Sistema de frenos</MenuItem>
                <MenuItem value={"2"}>Sistema de refrigeracion</MenuItem>
                <MenuItem value={"3"}>Motor</MenuItem>
                <MenuItem value={"4"}>Transmisión</MenuItem>
                <MenuItem value={"5"}>Sistema eléctrico</MenuItem>
                <MenuItem value={"6"}>Sistema de escape</MenuItem>
                <MenuItem value={"7"}>Neumáticos y ruedas</MenuItem>
                <MenuItem value={"8"}>Suspensión y dirección</MenuItem>
                <MenuItem value={"9"}>Sistema de aire acondicionado y calefacción</MenuItem>
                <MenuItem value={"10"}>Sistema de combustible</MenuItem>
                <MenuItem value={"11"}>Reparacion y reemplazo de parabrisas y cristales</MenuItem>
                </TextField>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="fechaSal"
                  label="Fecha de salida"
                  value={fechaSal}
                  variant="standard"
                  onChange={(e) => setFechaSal(e.target.value)}
                >
                </TextField>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="horaSal"
                  label="hora de salida"
                  value={horaSal}
                  variant="standard"
                  onChange={(e) => setHoraSal(e.target.value)}
                />
              </FormControl>
              
              <FormControl fullWidth>
                <TextField
                  id="fechaRetiro"
                  label="Fecha de retiro"
                  value={fechaRetiro}
                  variant="standard"
                  onChange={(e) => setFechaRetiro(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="horaRetiro"
                  label="Hora de retiro"
                  value={horaRetiro}
                  variant="standard"
                  onChange={(e) => setHoraRetiro(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <br />
                <Button
                  variant="contained"
                  color="info"
                  onClick={(e) => saveReparaciones(e)}
                  style={{ marginLeft: "0.5rem" }}
                  startIcon={<SaveIcon />}
                >
                  Registrar
                </Button>
              </FormControl>
            </form>
            <hr />
            <Link to="/reparaciones">Lista de reparaciones</Link>
          </Box>
        </div>
    );
}

export default AgregaReparacion;