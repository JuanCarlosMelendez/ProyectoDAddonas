import { DataTypes } from 'sequelize';
import { db } from '../db/connection';

const Producto = db.define('Producto', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.NUMBER
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    usuario_id: {
        type: DataTypes.INTEGER
    },
    stock: {
        type: DataTypes.INTEGER
    },
    img: {
        type: DataTypes.STRING
    }

});

export default Producto;