import { Mongo } from 'meteor/mongo'
import Schema from './BaseSchema'

export const api = new Mongo.Collection('Funcionarios')

export const schema = new Schema({
  active: {
    type: Boolean,
    label: 'Funcionário Ativo',
    defaultValue: true
  },
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
    label: 'CPF/CNPJ',
    optional: true,
    uniforms: {
      regEx: /^[0-9]{5}$/
    }
  },
  rg: {
    type: String,
    label: 'RG',
    optional: true
  },
  sex: {
    type: String,
    label: 'Sexo',
    optional: true,
    allowedValues: ['Masculino', 'Feminino']
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
    optional: true,
    uniforms: {
      multiLine: true,
      rows: 1,
      rowsMax: 4
    }
  }
})

export default api
