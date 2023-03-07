"use strict";
/**
    CREATE TABLE IF NOT EXISTS `proyectodaddonas`.`orden` (
  `id` INT PRIMARY KEY auto_increment,
  `user_id` INT NOT NULL,
  INDEX user_id_idx (user_id),
  CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES proyectodaddonas.usuarios(id),
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
const Orden = connection_1.db.define('Orden', {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Orden;
//# sourceMappingURL=orden.js.map