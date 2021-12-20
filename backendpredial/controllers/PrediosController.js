const express = require('express');
/* const { authGuard } = require('../middlewares/auth'); */
const { Predio } = require('../models/Predio');
const mongoose = require('mongoose');

const router = express.Router();

router.get("/all",/*  authGuard, */ async (request, response) => { //habilitarla cuando se coloque el middleware
    //router.get("/all", async (request, response) => {
    /* const page = parseInt(request.query.page);
    const limit = parseInt(request.query.limit);
    console.log(request.jwt_data); //usarla solo cuando se coloque el middleware
    const datos = await Predio.find({}, {}, { sort: { codigo_predio: 1 }, skip: ((page - 1) * limit), limit: limit }).exec(); */
    const datos = await Predio.find();
    response.json({ count: await Predio.count(), data: datos });
});

router.post("/new",/*  authGuard, */ async (request, response) => {
    try {
        const predio = new Predio(request.body);
        await predio.save();
        response.json(predio);
    } catch (e) {
        response.sendStatus(500);
        console.log(e);
    }

});

router.put("/complete", /* authGuard, */ async (request, response) => {
    try {
        console.log(request.body);
        const id = request.body.id;
        const afectado = await Predio.findById(id);
        console.log(afectado);
        afectado.completado = !afectado.completado;
        await afectado.save();
        response.json({ id: request.id });
    } catch (e) {
        response.sendStatus(500);
        console.log(e);
    }

});

router.post('/delete',/*  authGuard, */ async (request, response) => {
    try {
        console.log("Borrando...");
        console.log(request.body.id);
        const id = request.body.id;
        const afectado = await Predio.deleteOne({ _id: id });
        console.log(afectado);
        response.json({ id: id });
    } catch (e) {
        response.sendStatus(500);
        console.log(e);
    }
});

router.put('/edit', /* authGuard, */ async (request, response) => {
    try {
        console.log(request.body);
        const datosActualizados = request.body;
        const afectado = await Predio.findByIdAndUpdate(datosActualizados._id, datosActualizados);
        console.log(afectado);
        response.json({ id: request.body._id });
    } catch (e) {
        response.sendStatus(500);
        console.log(e);
    }
}); 

module.exports = router;
