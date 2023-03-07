import { Sequelize } from "sequelize";


export const db = new Sequelize('ProyectoDaddonas', 'root', '121212', {
    host: 'localhost',
    dialect: 'mysql'
});

