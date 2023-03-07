"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalle_orden_1 = require("../controllers/detalle_orden");
const routerDetalleOrden = (0, express_1.Router)();
routerDetalleOrden.get('/', detalle_orden_1.getDetalleOrdenes);
routerDetalleOrden.get('/:id', detalle_orden_1.getDetalleOrden);
routerDetalleOrden.post('/', detalle_orden_1.postDetalleOrden);
routerDetalleOrden.put('/:id', detalle_orden_1.putDetalleOrden);
routerDetalleOrden.delete('/:id', detalle_orden_1.deleteputDetalleOrden);
exports.default = routerDetalleOrden;
//# sourceMappingURL=detalleDeOrden.js.map