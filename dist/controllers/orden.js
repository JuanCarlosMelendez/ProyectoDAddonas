"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrden = exports.putOrden = exports.postOrden = exports.getOrden = exports.getOrdenes = void 0;
const getOrdenes = (req, res) => {
    res.json({
        msg: 'Get_Ordenes'
    });
};
exports.getOrdenes = getOrdenes;
const getOrden = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get_Orden',
        id
    });
};
exports.getOrden = getOrden;
const postOrden = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Post_Orden',
        body
    });
};
exports.postOrden = postOrden;
const putOrden = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Put_Orden',
        body
    });
};
exports.putOrden = putOrden;
const deleteOrden = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Delete_Orden',
        id
    });
};
exports.deleteOrden = deleteOrden;
//# sourceMappingURL=orden.js.map