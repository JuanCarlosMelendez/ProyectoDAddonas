import { Router } from "express";
import { deleteputDetalleOrden, getDetalleOrden, getDetalleOrdenes, postDetalleOrden, putDetalleOrden,  } from "../controllers/detalle_orden";





const routerDetalleOrden = Router();

routerDetalleOrden.get('/',         getDetalleOrdenes);
routerDetalleOrden.get('/:id',      getDetalleOrden);
routerDetalleOrden.post('/',        postDetalleOrden);
routerDetalleOrden.put('/:id',      putDetalleOrden);
routerDetalleOrden.delete('/:id',   deleteputDetalleOrden);


export default routerDetalleOrden;