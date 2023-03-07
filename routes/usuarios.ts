import { Router } from "express";
import { check } from "express-validator";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";



const router = Router();

router.get('/',         getUsuarios);
router.get('/:id',      getUsuario);
router.post('/', [
    check('email', 'El correo no es valido').isEmail()
],        postUsuario);
router.put('/:id',      putUsuario);
router.delete('/:id',   deleteUsuario);


export default router;