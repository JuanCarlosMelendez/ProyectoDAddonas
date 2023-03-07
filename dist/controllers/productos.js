"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducto = exports.putProducto = exports.postProducto = exports.getProducto = exports.getProductos = void 0;
const express_validator_1 = require("express-validator");
const productos_1 = __importDefault(require("../models/productos"));
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield productos_1.default.findAll();
    res.json(productos);
});
exports.getProductos = getProductos;
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield productos_1.default.findByPk(id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({
            msg: 'No existe  un producto con ese id'
        });
    }
});
exports.getProducto = getProducto;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    } //Quizas no lo llamemos por los momentos
    const { body } = req;
    try {
        const existeId = yield productos_1.default.findOne({
            where: {
                id: body.id
            }
        });
        if (existeId) {
            return res.status(400).json({
                msg: 'Ya existe un producto con el id: ' + body.id
            });
        }
        const producto = productos_1.default.build(body);
        // Guardar en BD
        yield producto.save();
        res.json({
            producto,
            msg: 'Producto creado de manera satisfactoria'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postProducto = postProducto;
const putProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const producto = yield productos_1.default.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id:  ' + id
            });
        }
        yield producto.update(body);
        res.json({
            msg: 'El producto ha sido actualizado',
            producto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putProducto = putProducto;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield productos_1.default.findByPk(id);
    if (!producto) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield producto.update({ estado: false, stock: 0 });
    res.json({
        msg: 'El producto ha sido borrado',
        producto
    });
});
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=productos.js.map