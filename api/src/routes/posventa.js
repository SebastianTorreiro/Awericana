const { Router } = require("express");
const { body, param } = require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const { 
    iniciarReclamo,
    actualizarEstadoEnvio,
    revelarVendedor
} = require("../controllers/posventa");

const router = Router();

router.post('/solicitar_devolucion' , iniciarReclamo );
router.post('/tracking' , actualizarEstadoEnvio );
router.post('/revelar_vendedor' , revelarVendedor );

module.exports = router