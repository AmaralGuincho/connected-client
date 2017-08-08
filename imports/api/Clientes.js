import { Mongo } from 'meteor/mongo'
import Schema from './BaseSchema'

export const api = new Mongo.Collection('Clientes')

export const schema = new Schema({
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
  },
  active: {
    type: Boolean,
    label: 'Funcionário Ativo',
    defaultValue: true
  }
})

export default api
