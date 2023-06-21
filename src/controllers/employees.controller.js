import { pool } from '../db.js'


//export const getEmployees = (req, res) => res.send('Obteniendo empleados')
//http://localhost:3000/api/employees
export const getEmployees = async(req, res) => {
    const [rows] = await pool.query( 'SELECT * FROM solicitudes' )
    res.json(rows)
}


//export const createEmployee = (req, res) => res.send('Agregando empleados')
export const createEmployee = async(req, res) => {
    //console.log(req.body)
    const {folio_solicitud, superficie} = req.body

    //Aquí podemos poner validaciones previas a la inserción, por ejemplo validar los tipos de datos que acepte nuestra bd o que no sean null los que no deban serlo, etc.


    const [rows] = await pool.query( 'INSERT INTO solicitudes(folio_solicitud, superficie) VALUES (?, ?)', [folio_solicitud, superficie] )
    //res.send({rows})
    res.send({
        id_solicitud: rows.insertId, //Propiedad post que devuelve el id de la fila que se ha insertado.
        folio_solicitud,
        superficie
    })
}


export const updateEmployee = (req, res) => res.send('Actualizando empleados')


export const deleteEmployee = (req, res) => res.send('Eliminando empleados')