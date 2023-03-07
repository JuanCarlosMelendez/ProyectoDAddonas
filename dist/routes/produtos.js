"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const routerProductos = (0, express_1.Router)();
routerProductos.get('/', productos_1.getProductos);
routerProductos.get('/:id', productos_1.getProducto);
routerProductos.post('/', productos_1.postProducto);
routerProductos.put('/:id', productos_1.putProducto);
routerProductos.delete('/:id', productos_1.deleteProducto);
exports.default = routerProductos;
//# sourceMappingURL=produtos.js.map