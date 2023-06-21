import express from 'express'
//import { pool } from './db.js'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
//import './config.js'


const app = express()
app.use(express.json()) //Para que el objeto app pueda traducir las peticiones json

app.use(indexRoutes)
app.use('/api', employeesRoutes) //Ej. localhost:3000/api/employees

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;