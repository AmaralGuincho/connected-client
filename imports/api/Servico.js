import { Mongo } from 'meteor/mongo'
import Schema from './BaseSchema'

export const api = new Mongo.Collection('Servico')

export const schema = new Schema({
  name: {
    type: String,
    optional: false,
    label: 'Nome'
  },

  funcionario: {
    type: String,
    optional: false
  },

  status: {
    type: String,
    label: 'Status do Serviço',
    allowedValues: [ 'Ativo', 'Em Progresso', 'Concluido', 'Cancelado' ]
  },

  serviceType: {
    type: String,
    label: 'Tipo de Serviço',
    allowedValues: [ 'Taxi', 'Guincho', 'SOS', 'SOSPESADO' ]
  }

})

export default api
