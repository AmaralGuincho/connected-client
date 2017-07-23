import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const api = new Mongo.Collection('Funcionarios')

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
  occupation: {
    type: String,
    label: 'Cargo',
    optional: false
  },
  dob: {
    type: Date,
    label: 'Nascimento',
    optional: true
  },
  cpf: {
    type: String,
    label: 'CPF',
    optional: true
  },
  rg: {
    type: String,
    label: 'RG',
    optional: true
  },
  sex: {
    type: String,
    label: 'Sexo',
    optional: true
  },
  email: {
    type: String,
    label: 'Email',
    optional: true
  },
  cep: {
    type: String,
    label: 'CEP',
    optional: true
  },
  address: {
    type: String,
    label: 'Endereco',
    optional: true
  }
})

export default api
