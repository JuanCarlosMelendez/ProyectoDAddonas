"use strict";
// `orden_id` INT NOT NULL,
// `productos_id` INT NOT NULL,
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
// La tabla debe llamarse igual pero con una s al final chupate esa...
const DetalleDeOrden = connection_1.db.define('detalle', {
    orden_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    productos_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = DetalleDeOrden;
//# sourceMappingURL=detalle%20de%20orden.js.map