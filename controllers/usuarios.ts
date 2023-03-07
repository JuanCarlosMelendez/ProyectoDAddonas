import { Request, Response } from "express";
import Usuario from "../models/usuario";
import bcryptjs from 'bcryptjs';
import { validationResult } from "express-validator/src/validation-result";

// npm i --save-dev @types/bcryptjs
// sino da error no encuentra los tipos y en la web esta mal el link de instalacion.



export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const usuario  = await Usuario.findByPk( id );

    if ( usuario ) {
        res.json(usuario)

    } else {
        res.status( 404 ).json({
            msg:  'No existe un usuario con el id:' + ' ' + id
        })
    }
}

export const postUsuario = async (req: Request, res: Response) => {


    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    const { body } =  req;


    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        })
        if ( existeEmail ) {
            return res.status ( 400 ).json({
                msg: 'Ya existe un usuario con el email: ' + body.email 
            })
        }
    
        const usuario = Usuario.build(body);

        // Guardar en BD
        await usuario.save();
    
    
        res.json( {
            usuario,
            msg: 'Usuario creado de manera satisfactoria'
        })
        
    } catch (error:any) {
        console.log( error)
        res.status( 500 ).json({
            msg: 'Hable con el administrador'
        })
        
    }
}

export const putUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const  { body } = req;

    try {
        
        const usuario = await Usuario.findByPk( id );

        if ( !usuario ) {
            return res.status( 404 ).json({
                msg: 'No existe un usuario con el id: ' + id
            });
        }

        await usuario.update ( body );

        res.json ( usuario );

    } catch (error) {
        console.log( error );
        res.status( 500 ).json({
            msg: 'Hable con el administrador'
        }) 
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    const usuario =  await Usuario.findByPk( id );

    if ( !usuario ) {
        return res.status( 404 ).json({
            msg: 'No existe un usuario con el id ' + id
        })
    }

    await usuario.update( {estado: false});

    res.json({
        msg: 'El usuario ha sido borrado',
        usuario
    })
}