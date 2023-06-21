import {config} from 'dotenv'


config()

/* console.log(process.env.PORT)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PORT)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE) */

export const PORT = process.env.PORT || 3000 //export const PORT = process.env.PORT || 3000. Trae el valor de PORT de .env, si no existe asigna el valor 3000. Recordar que "export" es para poder exportar la variable y poder ocuparla en otras clases.
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'conafor'
export const DB_DATABASE = process.env.DB_DATABASE || 'grrch_2023'