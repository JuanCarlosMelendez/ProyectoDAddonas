import { Request, Response } from "express";


export const getOrdenes =  (req: Request, res: Response) => {

    res.json({
        msg: 'Get_Ordenes'
    });
}

export const getOrden =  (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Get_Orden',
        id
    });
}

export const postOrden =  (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'Post_Orden',
        body
    });
}


export const putOrden =  (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'Put_Orden',
        body
    });
}

export const deleteOrden =  (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Delete_Orden',
        id
    });
}