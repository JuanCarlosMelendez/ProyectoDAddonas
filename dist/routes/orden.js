"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orden_1 = require("../controllers/orden");
const routerOrden = (0, express_1.Router)();
routerOrden.get('/', orden_1.getOrdenes);
routerOrden.get('/:id', orden_1.getOrden);
routerOrden.post('/', orden_1.postOrden);
routerOrden.put('/:id', orden_1.putOrden);
routerOrden.delete('/:id', orden_1.deleteOrden);
exports.default = routerOrden;
//# sourceMappingURL=orden.js.map