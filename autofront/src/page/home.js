import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="container text-center">
        <h1>Autofix: el mejor sistema de reparado de vehiculos del mundo
        </h1>
        <p>
            <Link
            to="/agregar"
            style={{ textDecoration: "none", marginBottom: "1rem" }}
            >
            <Button
                variant="contained"
                color="primary"
            >
                Añadir Vehiculo
            </Button>
            </Link>
            <Link
            to="/mostrar"
            style={{ textDecoration: "none", marginBottom: "1rem" }}
            >
            <Button
                variant="contained"
                color="primary"
            >
                Mostrar Vehiculos
            </Button>
            </Link>
            <Link
            to="/reparaciones"
            style={{ textDecoration: "none", marginBottom: "1rem" }}
            >
            <Button
                variant="contained"
                color="primary"
            >
                Mostrar reparaciones
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
                Agregar Reparaciones
            </Button>
            </Link>
        </p>
      </div>
      
    );
  };
  
  export default Home;