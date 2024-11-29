import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { CarritoCard } from "../../components/Carrito/CarritoCard";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function PanelCarrito() {
  const [open, setOpen] = React.useState(false);
  const [direccion, setDireccion] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const { pedidos, registrarPedido } = useContext(CarritoContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);  
  }

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  }

  const submitPedido = (event) => {
    event.preventDefault()
    registrarPedido(direccion, telefono)
  }

  if (pedidos.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1>NO HAY NADA</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="mx-auto w-fit pt-24 ">
          <button
            type="button"
            className="bg-rojo-claro text-white px-4 py-2 rounded-md transition-colors duration-700 hover:bg-rojo-oscuro"
            onClick={handleClickOpen}
          >
            Realizar Pedido
          </button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            fullWidth={fullWidth}
            maxWidth={maxWidth}
          >
            <DialogTitle>{"Realizar Pedido"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <form
                  onSubmit={submitPedido}
                  className="flex flex-col gap-4 p-5 w-full">
                  <TextField
                    id="outlined-basic"
                    label="Dirección"
                    variant="outlined"
                    defaultValue={direccion}
                    onChange={handleDireccionChange}
                    fullWidth
                    required
                  />
                  <TextField
                    id="outlined-basic"
                    label="Telefono"
                    variant="outlined"
                    defaultValue={telefono}
                    onChange={handleTelefonoChange}
                    fullWidth
                    required
                  />
                  <input 
                    type="submit" 
                    value="Enviar Pedido" 
                    className="bg-rojo-claro text-white px-4 py-2 rounded-md transition-colors duration-700 hover:bg-rojo-oscuro" 
                    onSubmit={submitPedido}
                  />

                </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Quitar</Button>
              <Button onClick={handleClose}>Confirmar</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="w-full container mx-auto min-h-screen flex justify-center items-center gap-5 p-5">
          {pedidos.map((pedido) => (
            <CarritoCard key={pedido.id_producto} pedido={pedido} />
          ))}
        </div>
      </>
    );
  }
}
