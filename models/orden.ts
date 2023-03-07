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

import { DataTypes } from "sequelize";
import { db } from "../db/connection";

const Orden = db.define('Orden', {
    user_id: {
        type: DataTypes.INTEGER
    }

});

export default Orden;