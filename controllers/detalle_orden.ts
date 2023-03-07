import { Request, Response } from "express";
import DetalleDeOrden from "../models/detalle de orden";
import Orden from "../models/orden";


export const getDetalleOrdenes =  async (req: Request, res: Response) => {

    const detalle =  await DetalleDeOrden.findAll( )
    
    res.json({
        msg: 'Get_DetalleOrdenes',
        detalle
    });
}

export const getDetalleOrden =  async (req: Request, res: Response) => {

    const { id } = req.params;

    const detalle = await DetalleDeOrden.findAll({
        where: {
            orden_id: id
        }
    })
    res.json({
        msg: 'Detalle de orden N°: ' + id,
        detalle
    });
}

export const postDetalleOrden =  async (req: Request, res: Response) => {

    const { body } = req;
    try {

     
     const existeId = await DetalleDeOrden.findOne({
         where:{
             orden_id:  body.orden_id
         }
     })
     if ( !existeId ){
         return res.status(400).json({
             msg: 'No existe una orden con ese id: ' + body.orden_id
         })
     }
     const detalle = DetalleDeOrden.build(body);
    
     // Guardar en BD
    
     await detalle.save();
    
     res.json( {
         msg: 'El producto se ha agregado exitosamente',
         body
     })
    
 } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })

 }

}


export const putDetalleOrden = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;


    try {
        const detalle = await DetalleDeOrden.findByPk( id );

        if ( !detalle  ) {
            return res.status(404).json({
                msg: 'No existe un producto con el id:  ' + id
            });
        }

        await detalle.update( body );

        res.json( {
            msg:  'El detalle de la Orden ha sido actualizado',
            detalle} );
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        }) 
        
    }
}

export const deleteputDetalleOrden = async (req: Request, res: Response) => {
    const { id } = req.params;

    const detalle =  await DetalleDeOrden.findByPk( id );

    if ( !detalle ) {
        return res.status( 404 ).json({
            msg: 'No existe un usuario con el id ' + id
        })
    }

    await detalle.destroy();

    res.json({
        msg: 'El producto ha sido borrado',
    })
}