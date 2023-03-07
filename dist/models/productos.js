"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
const Producto = connection_1.db.define('Producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.NUMBER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER
    },
    img: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Producto;
//# sourceMappingURL=productos.js.map