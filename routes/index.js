const express = require('express');
const router = express.Router();


const { empleado } = require('../Models/empleado');

router.get('/api/empleados', (req,res) => {
    empleado.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});;

router.post('/api/empleados/add', (req, res) => {
    const emp = new empleado({
        Nombre: req.body.Nombre,
        ApellidoP: req.body.ApellidoP,
        ApellidoM: req.body.ApellidoM,
        Telefono: req.body.Telefono,
    });
    emp.save((err, data) => {
        res.status(200).json({ code:200, message: 'Empleado agregado',
        addempleado:data })
    });
});

router.delete('/api/empleados/:id', (req, res) => {
    empleado.findByIdAndRemove(req.params.id, (err, data) => {
      if(!err) {
        res.status(200).json({ code:200, message: 'Empleado eliminado',
    deleteempleado: data});
      }  
    })
})


module.exports = router;
