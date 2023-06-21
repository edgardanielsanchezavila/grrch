import { Router } from 'express'
import { ping, consulta_prueba } from '../controllers/index.controller.js'


const router = Router()

router.get( '/sol_id', consulta_prueba ) //get de prueba
router.get( '/ping', ping )

export default router //Esta línea va al final porque indica que se han concluido con las operaciones de router y con el export router ya se puede usar en otros archivos.
