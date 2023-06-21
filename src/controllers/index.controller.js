import { pool } from '../db.js'


export const consulta_prueba = async(req, res) => {
    const[result] = await pool.query(" SELECT * FROM solicitudes WHERE folio_solicitud = 'S202103000072' ")
    res.json(result[0])
}

export const ping = async(req, res) => {
    const[result] = await pool.query('SELECT "pong" AS result')
    res.json(result[0])
}