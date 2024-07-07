//import './App.css'
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import vehiculosService from "../service/vehiculos.service";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";

const AgregarVehiculo = () => {
    const [patente, setPatente] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [tipoauto, setTipoauto] = useState("");
    const [anofabricacion, setAnofabricacion] = useState("");
    const [tipomotor, setTipomotor] = useState("");
    const [asientos, setAsientos] = useState("");
    const { id } = useParams();
    const [tituloVehiculoForm, setTituloVehiculoForm] = useState("");
    const navigate = useNavigate();
  
    const saveVehiculo = (e) => {
      e.preventDefault();
  
      const vehiculo = { patente, marca, modelo, tipoauto, anofabricacion, tipomotor, asientos, id };
      if (id) {
        vehiculosService
          .update(vehiculo)
          .then((response) => {
            console.log("vehiculo actualizado.", response.data);
            navigate("/mostrar");
          })
          .catch((error) => {
            console.log(
              "Ha ocurrido un error al intentar actualizar datos del vehiculo.",
              error
            );
          });
      } else {
        vehiculosService
          .create(vehiculo)
          .then((response) => {
            console.log("Vehiculo añadido.", response.data);
            navigate("/mostrar");
          })
          .catch((error) => {
            console.log(
              "Ha ocurrido un error al intentar crear nuevo vehiculo.",
              error
            );
          });
      }
    };
  
    useEffect(() => {
      if (id) {
        setTituloVehiculoForm("Editar Vehiculo");
        vehiculosService
          .get(id)
          .then((vehiculo) => {
            setPatente(vehiculo.data.patente);
            setMarca(vehiculo.data.marca);
            setModelo(vehiculo.data.modelo);
            setTipoauto(vehiculo.data.tipoauto);
            setAnofabricacion(vehiculo.data.anofabricacion);
            setTipomotor(vehiculo.data.tipomotor);
            setAsientos(vehiculo.data.asientos);
          })
          .catch((error) => {
            console.log("Se ha producido un error.", error);
          });
      } else {
        setTituloVehiculoForm("Nuevo Vehiculo");
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
            <h3> {tituloVehiculoForm} </h3>
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
                  id="marca"
                  label="Marca"
                  value={marca}
                  variant="standard"
                  onChange={(e) => setMarca(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="modelo"
                  label="Modelo"
                  value={modelo}
                  variant="standard"
                  onChange={(e) => setModelo(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="tipoauto"
                  label="Tipo de auto"
                  select
                  value={tipoauto}
                  variant="standard"
                  onChange={(e) => setTipoauto(e.target.value)}
                >
                <MenuItem value={"Sedan"}>Sedan</MenuItem>
                <MenuItem value={"Hatchback"}>Hatchback</MenuItem>
                <MenuItem value={"SUV"}>SUV</MenuItem>
                <MenuItem value={"Pickup"}>Pickup</MenuItem>
                <MenuItem value={"Furgoneta"}>Furgoneta</MenuItem>
                </TextField>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="anofabricacion"
                  label="Año de Fabricacion"
                  value={anofabricacion}
                  variant="standard"
                  onChange={(e) => setAnofabricacion(e.target.value)}
                  style={{ width: "25%" }}
                >
                </TextField>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="tipomotor"
                  label="Tipo de motor"
                  select
                  value={tipomotor}
                  variant="standard"
                  onChange={(e) => setTipomotor(e.target.value)}
                >
                <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
                <MenuItem value={"Diesel"}>Diésel</MenuItem>
                <MenuItem value={"Hibrido"}>Híbrido</MenuItem>
                <MenuItem value={"Electrico"}>Eléctrico</MenuItem>
                </TextField>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="asientos"
                  label="numero de asientos"
                  value={asientos}
                  variant="standard"
                  onChange={(e) => setAsientos(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <br />
                <Button
                  variant="contained"
                  color="info"
                  onClick={(e) => saveVehiculo(e)}
                  style={{ marginLeft: "0.5rem" }}
                  startIcon={<SaveIcon />}
                >
                  Registrar
                </Button>
              </FormControl>
            </form>
            <hr />
            <Link to="/mostrar">Lista de vehiculos</Link>
          </Box>
        </div>
    );
}

export default AgregarVehiculo;