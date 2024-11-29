import { useEffect } from "react";
import { useProductos } from "../../zustand/useProductos";
import { darkTheme } from "../../logic/Theme";
import { Box, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { OpcionesBoton } from "../../components/OpcionesBoton/OpcionesBoton";

const columns = [
  { id: "id", label: "ID", minWidth: 160, align: "center" },
  { id: "imagen", label: "Imagen", minWidth: 160, align: "center" },
  { id: "nombre", label: "Nombre", minWidth: 160, align: "center" },
  { id: "descripcion", label: "Descripción", minWidth: 160, align: "center" },
  { id: "precio", label: "Precio", minWidth: 160, align: "center" },
  { id: "categoria", label: "Categoria", minWidth: 160, align: "center" },
  { id: "opciones", label: "Opciones", minWidth:160, align: "center"}
];

export function ListaProductos() {
  const { productos, cargarProductos } = useProductos();

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default" }}>
        <div className=" w-full min-h-screen text-white flex">
          <aside className="w-full max-w-[15rem] h-screen"></aside>
          <main className="p-8 w-full text-white">
            <h1 className="text-center text-4xl font-bold pb-9">
              Lista de productos
            </h1>

            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 940 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productos.map((producto) => (
                      <TableRow key={producto.id_producto}>
                        <TableCell align="center">
                          {producto.id_producto}
                        </TableCell>
                        <TableCell align="center">
                          <img
                            src={producto.url_imagen}
                            alt="producto"
                            width={100}
                            height={100}
                            className="mx-auto"
                          />
                        </TableCell>
                        <TableCell align="center">{producto.nombre}</TableCell>
                        <TableCell align="center">
                          {producto.descripcion}
                        </TableCell>
                        <TableCell align="center">
                          {'S/. ' + producto.precio}
                        </TableCell>
                        <TableCell align="center">
                          {producto.id_categoria}
                        </TableCell>
                        <TableCell align="center">
                          <OpcionesBoton 
                            id={producto.id_producto}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            categoria={producto.id_categoria}
                            descripcion={producto.descripcion}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </main>
        </div>
      </Box>
    </ThemeProvider>
  );
}
