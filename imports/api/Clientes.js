import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const api = new Mongo.Collection('Clientes')

export const schema = new SimpleSchema({
  name: {
    type: String,
    optional: false,
    label: 'Nome'
  },
  lastname: {
    type: String,
    label: 'Sobrenome',
    optional: true
  },
  phone: {
    type: String,
    label: 'Celular',
    optional: true
  },
  email: {
    type: String,
    label: 'Email',
    optional: true
  },
  car: {
    type: String,
    label: 'Veículo',
    optional: false
  },
  plate: {
    type: String,
    label: 'Placa',
    optional: true
  },
  color: {
    type: String,
    label: 'Cor',
    optional: true
  },
  insurance: {
    type: String,
    label: 'Seguradora',
    optional: true
  }
})

export default api
