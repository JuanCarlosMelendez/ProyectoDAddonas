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
exports.deleteputDetalleOrden = exports.putDetalleOrden = exports.postDetalleOrden = exports.getDetalleOrden = exports.getDetalleOrdenes = void 0;
const detalle_de_orden_1 = __importDefault(require("../models/detalle de orden"));
const getDetalleOrdenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detalle = yield detalle_de_orden_1.default.findAll();
    res.json({
        msg: 'Get_DetalleOrdenes',
        detalle
    });
});
exports.getDetalleOrdenes = getDetalleOrdenes;
const getDetalleOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detalle = yield detalle_de_orden_1.default.findAll({
        where: {
            orden_id: id
        }
    });
    res.json({
        msg: 'Detalle de orden N°: ' + id,
        detalle
    });
});
exports.getDetalleOrden = getDetalleOrden;
const postDetalleOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeId = yield detalle_de_orden_1.default.findOne({
            where: {
                orden_id: body.orden_id
            }
        });
        if (!existeId) {
            return res.status(400).json({
                msg: 'No existe una orden con ese id: ' + body.orden_id
            });
        }
        const detalle = detalle_de_orden_1.default.build(body);
        // Guardar en BD
        yield detalle.save();
        res.json({
            msg: 'El producto se ha agregado exitosamente',
            body
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postDetalleOrden = postDetalleOrden;
const putDetalleOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const detalle = yield detalle_de_orden_1.default.findByPk(id);
        if (!detalle) {
            return res.status(404).json({
                msg: 'No existe un producto con el id:  ' + id
            });
        }
        yield detalle.update(body);
        res.json({
            msg: 'El detalle de la Orden ha sido actualizado',
            detalle
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putDetalleOrden = putDetalleOrden;
const deleteputDetalleOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detalle = yield detalle_de_orden_1.default.findByPk(id);
    if (!detalle) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield detalle.destroy();
    res.json({
        msg: 'El producto ha sido borrado',
    });
});
exports.deleteputDetalleOrden = deleteputDetalleOrden;
//# sourceMappingURL=detalle_orden.js.map