import { Request, Response, NextFunction } from "express";
module.exports = function (req: Request, res: Response, next: NextFunction) {
    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Metodos de solicitud que deseas permitir
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
};