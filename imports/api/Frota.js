import { Mongo } from 'meteor/mongo'
import Schema from './BaseSchema'

export const api = new Mongo.Collection('Frota')

export const schema = new Schema({
  active: {
    type: Boolean,
    optional: false,
    label: 'Ativo'
  },

  plate: {
    type: String,
    optional: false,
    label: 'Placa'
  },

  vehicleType: {
    type: String,
    label: 'Tipo de Veículo',
    allowedValues: ['carro', 'moto', 'guincho leve', 'guincho pesado']
  },

  status: {
    type: String,
    label: 'Status do Carro',
    allowedValues: [ 'Disponível', 'Em Serviço', 'Em Manutenção' ]
  },

  model: {
    type: String,
    label: 'Modelo do Carro'
  }

})

export default api
