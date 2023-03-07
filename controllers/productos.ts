import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Producto from '../models/productos';


export const getProductos =  async (req: Request, res: Response) =>{

    const productos = await Producto.findAll();
    res.json( productos);
}

export const getProducto = async (req: Request, res: Response) =>{

    const { id } = req.params;
    const producto = await Producto.findByPk( id );

    if ( producto ) {
        res.json( producto )
    } else {
        res.status(404).json({
            msg: 'No existe  un producto con ese id'
        })
    }
}

export const postProducto =  async (req: Request, res: Response) =>{


    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }//Quizas no lo llamemos por los momentos

    const { body } = req;

    try {
        const existeId = await Producto.findOne({
            where:{
                id: body.id
            }
        })
        if ( existeId ) {
            return res.status(400).json({
                msg: 'Ya existe un producto con el id: ' + body.id
            })
        }

        const producto = Producto.build(body);

        // Guardar en BD
        await producto.save();

        res.json({
            producto,
            msg: 'Producto creado de manera satisfactoria'
        })
        
    } catch (error:any) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putProducto = async (req: Request, res: Response) =>{

    const { id } = req.params;
    const { body } = req;


    try {
        const producto = await Producto.findByPk( id );

        if ( !producto  ) {
            return res.status(404).json({
                msg: 'No existe un producto con el id:  ' + id
            });
        }

        await producto.update( body );

        res.json( {
            msg:  'El producto ha sido actualizado',
            producto} );
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        }) 
        
    }
}

export const deleteProducto =  async (req: Request, res: Response) =>{

    const { id } = req.params;

    const producto =  await Producto.findByPk( id );

    if ( !producto ) {
        return res.status( 404 ).json({
            msg: 'No existe un usuario con el id ' + id
        })
    }

    await producto.update( {estado: false, stock: 0});

    res.json({
        msg: 'El producto ha sido borrado',
        producto
    })
}