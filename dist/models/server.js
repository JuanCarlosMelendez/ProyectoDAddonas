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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const connection_1 = require("../db/connection");
const produtos_1 = __importDefault(require("../routes/produtos"));
const orden_1 = __importDefault(require("../routes/orden"));
const detalleDeOrden_1 = __importDefault(require("../routes/detalleDeOrden"));
class Server {
    constructor() {
        this.rutasApi = {
            usuarios: '/api/usuarios',
            productos: '/api/productos',
            ordenes: '/api/orden',
            detalleOrdenes: '/api/detalle_orden'
        };
        this.port = process.env.PORT || '3001';
        this.app = (0, express_1.default)();
        // Llamar a la conexion con la BD
        this.dbConnection();
        // LLamar a los Middlewares
        this.middlewares();
        // Llamar las rutas de mi aplicacion
        this.routes();
    }
    // Conexion con la bd de forma asyncrona (promesa)
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.db.authenticate();
                console.log('La base de datos está en línea');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // Configurando cors
        this.app.use((0, cors_1.default)());
        // Lectura y parseo del body
        this.app.use(express_1.default.json());
        // Directorio publico
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.rutasApi.usuarios, usuarios_1.default),
            this.app.use(this.rutasApi.productos, produtos_1.default),
            this.app.use(this.rutasApi.ordenes, orden_1.default),
            this.app.use(this.rutasApi.detalleOrdenes, detalleDeOrden_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map