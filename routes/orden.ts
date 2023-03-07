import { Router } from "express";
import { getOrdenes, getOrden, postOrden, putOrden, deleteOrden } from '../controllers/orden';




const routerOrden = Router();

routerOrden.get('/',         getOrdenes);
routerOrden.get('/:id',      getOrden);
routerOrden.post('/',        postOrden);
routerOrden.put('/:id',      putOrden);
routerOrden.delete('/:id',   deleteOrden);


export default routerOrden;