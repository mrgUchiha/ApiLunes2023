import express from 'express'
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorResevas'

//Para poder llamar al controlador debo crear un objeto
//de la clase ControladorHabitacion

let controladorHabitacion = ControladorHabitacion();
let controladorReservas = ControladorReservas();

export let rutas = express.Router()

rutas.post('/api/habitaciones',controladorHabitacion.registrarHabitacion)
  rutas.get('/api/habitacion', controladorHabitacion.buscarHabitacionPorId)
  rutas.get('/api/habitaciones', controladorHabitacion.buscarHabitacion)
  rutas.put('/api/habitaciones', controladorHabitacion.modificarHabitacion)
  rutas.delete('/api/habitaciones', controladorHabitacion.borrarHabitacion)
  
  //Apartado de las reservas
  
  //Atendiendo una peticion y respondiendo
    rutas.post('/api/reserva', controladorReservas.registrarReserva)
    rutas.get('/api/reserva', controladorReservas.buscarReservaPorId)
    rutas.get('/api/reservas', controladorReservas.buscarReserva)
    rutas.put('/api/reservas', controladorReservas.modificarReserva)
    rutas.delete('/api/reservas', controladorReservas.borrarReserva)