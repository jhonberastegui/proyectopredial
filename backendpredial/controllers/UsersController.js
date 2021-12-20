const express = require('express');
const { Usuario } = require('../models/Usuario');
/* const { validarUsuario } = require('../utils/authUtils');
const { authGuard } = require('../middlewares/auth'); */
const router = express.Router();

router.post('/new', /* authGuard ,*/ async (request, response) => {
    console.log("Usuario nuevo...");
    const usr = new Usuario(request.body);
    await usr.save();
    response.send({ login: usr.login, _id: usr._id });
});

router.get("/all",/*  authGuard, */ async (request, response) => { //habilitarla cuando se coloque el middleware    
    const datos = await Usuario.find();
    response.json({ count: await Usuario.count(), data: datos });
});

router.put('/edit', /* authGuard, */ async (request, response) => {
    try {
        console.log(request.body);
        const datosActualizados = request.body;
        const afectado = await Usuario.findByIdAndUpdate(datosActualizados._id, datosActualizados);
        console.log(afectado);
        response.json({ id: request.body._id });
    } catch (e) {
        response.sendStatus(500);
        console.log(e);
    }
});

//{ username: xxxxxxx, password: xxxxxxxx }
/* router.post('/login', async (request, response) => {
    try {
        const { refreshToken, accessToken } = await validarUsuario(request.body);
        //Simplificamos el inicio de sesión, no usamos el refreshToken
        response.json({ token: accessToken });

    } catch (e) {
        console.log("Error al intentar autenticar usuario.");
        console.log(e);
        response.status(500).send('Nombre de usuario o contraseña no valido.');
    }
}); */

module.exports = router;