import { Mongo } from 'meteor/mongo'
import Schema from './BaseSchema'

export const api = new Mongo.Collection('Assitencia')

export const schema = new Schema({
  organizationName: {
    optional: true,
    type: String,
    label: 'Nome da Assistencia'
  },

  organizationNickname: {
    optional: true,
    type: String,
    label: 'Nome Resumido'
  },

  businessmanCode: {
    optional: true,
    type: String,
    label: 'Código Assistencia'
  },

  cgc: {
    optional: true,
    type: String,
    label: 'CGC'
  },

  address: {
    optional: true,
    type: String,
    label: 'Endereço'
  },

  regionManager: {
    optional: true,
    type: String,
    label: 'Nome do Responsavel'
  },

  businesspersonEmail: {
    optional: true,
    type: String,
    label: 'Email do Responsavel'
  },

  registrationUnitPhone: {
    optional: true,
    type: String,
    label: 'Telefone de Registro'
  },

  paymentUnitPhone: {
    optional: true,
    type: String,
    label: 'Telefone de Pagamento'
  },

  servicesCloserPhone: {
    optional: true,
    type: String,
    label: 'Telefone de Serviços'
  },

  currentCasesPhone: {
    optional: true,
    type: String,
    label: 'Telefone de Casos Atuais'
  },

  active: {
    type: Boolean,
    defaultValue: true,
    label: 'Ativo'
  }

})

export default api
