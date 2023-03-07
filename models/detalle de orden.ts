// `orden_id` INT NOT NULL,
// `productos_id` INT NOT NULL,

import { DataTypes } from "sequelize";
import { db } from "../db/connection";

// La tabla debe llamarse igual pero con una s al final chupate esa...

const DetalleDeOrden = db.define('detalle', {
    orden_id: {
        type: DataTypes.INTEGER
    },
    productos_id: {
        type: DataTypes.INTEGER
    }
});

export default DetalleDeOrden;