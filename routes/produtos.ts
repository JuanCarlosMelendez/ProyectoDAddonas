import { Router } from "express";
import { deleteProducto, getProducto, getProductos, postProducto, putProducto } from "../controllers/productos";



const routerProductos = Router();

routerProductos.get('/',         getProductos);
routerProductos.get('/:id',      getProducto);
routerProductos.post('/',        postProducto);
routerProductos.put('/:id',      putProducto);
routerProductos.delete('/:id',   deleteProducto);


export default routerProductos;