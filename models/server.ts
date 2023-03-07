import express, { Application } from "express";
import cors from "cors";
import router from "../routes/usuarios";
import { db } from "../db/connection";
import routerProductos from "../routes/produtos";
import routerOrden from '../routes/orden';
import routerDetalleOrden from "../routes/detalleDeOrden";


class Server {
    private app: Application;
    private port: string;
    private rutasApi ={
        usuarios:       '/api/usuarios',
        productos:      '/api/productos',
        ordenes:        '/api/orden',
        detalleOrdenes: '/api/detalle_orden'
    }

    constructor() {
        this.port = process.env.PORT || '3001';
        this.app =  express();

    // Llamar a la conexion con la BD
    this.dbConnection();


    // LLamar a los Middlewares
    this.middlewares();

    // Llamar las rutas de mi aplicacion
    this.routes();
    }

    // Conexion con la bd de forma asyncrona (promesa)

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('La base de datos está en línea');
        } catch (error:any) {
            throw new Error (error);
        }

    }


    middlewares() {

        // Configurando cors
        this.app.use( cors());

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use ( express.static('public'));

    }

    routes() {
        this.app.use( this.rutasApi.usuarios, router),
        this.app.use( this.rutasApi.productos, routerProductos),
        this.app.use( this.rutasApi.ordenes, routerOrden),
        this.app.use( this.rutasApi.detalleOrdenes, routerDetalleOrden)
    }


    listen () {
        this.app.listen( this.port, () => {
            console.log( `Servidor corriendo en puerto ${this.port}`)
        })
    }
}

export default Server;